<template>
  <header class="header">
    <div class="container">
      <div class="header-content">
        <div class="header-left">
          <h1 class="title">
            <i class="nf nf-fa-shield"></i>
            Defensive Rules Repository
          </h1>
          <p class="subtitle">{{ funnyQuote || 'Cybersecurity Detection Rules - Sigma & YARA' }}</p>
        </div>
        <div class="header-right desktop-only">
          <div class="rule-type-buttons">
            <button
              class="rule-type-btn"
              :class="{ active: activeRuleType === 'sigma' }"
              @click="activeRuleType = 'sigma'"
            >
              <i class="nf nf-fa-search"></i>
              Sigma ({{ sigmaRules.length }})
            </button>
            <button
              class="rule-type-btn"
              :class="{ active: activeRuleType === 'yara' }"
              @click="activeRuleType = 'yara'"
            >
              <i class="nf nf-fa-bug"></i>
              YARA ({{ yaraRules.length }})
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>

  <nav class="nav">
    <div class="container">
      <!-- Mobile Hamburger Navigation -->
      <div class="mobile-nav">
        <button class="hamburger-btn" @click="mobileMenuOpen = !mobileMenuOpen">
          <i class="nf nf-fa-bars"></i>
          {{ getCurrentNavLabel() }}
        </button>
      </div>

      <!-- Desktop Tactic Navigation (Sigma only) -->
      <div v-if="activeRuleType === 'sigma'" class="tactic-nav desktop-only">
        <button
          class="tactic-tab"
          :class="{ active: selectedTactic === '' }"
          @click="selectedTactic = ''"
        >
          <i class="nf nf-fa-list"></i>
          <span class="tactic-name">All</span>
          <span class="tactic-count">({{ sigmaRules.length }})</span>
        </button>
        <button
          v-for="tactic in tactics"
          :key="tactic"
          class="tactic-tab"
          :class="{ active: selectedTactic === tactic }"
          @click="selectedTactic = tactic"
        >
          <span class="tactic-name">
            <span v-for="word in tactic.split(' ')" :key="word" class="tactic-word">{{ word }}</span>
          </span>
          <span class="tactic-count">({{ sigmaRules.filter(r => r.tactic === tactic).length }})</span>
        </button>
      </div>

      <!-- Mobile Dropdown Menu -->
      <div v-if="mobileMenuOpen" class="mobile-dropdown" @click="mobileMenuOpen = false">
        <div class="mobile-menu" @click.stop>
          <!-- Rule Type Section -->
          <div class="mobile-section">
            <div class="mobile-section-header">Rule Type</div>
            <button
              class="mobile-menu-item"
              :class="{ active: activeRuleType === 'sigma' }"
              @click="activeRuleType = 'sigma'; mobileMenuOpen = false"
            >
              <i class="nf nf-fa-search"></i>
              Sigma Rules ({{ sigmaRules.length }})
            </button>
            <button
              class="mobile-menu-item"
              :class="{ active: activeRuleType === 'yara' }"
              @click="activeRuleType = 'yara'; mobileMenuOpen = false"
            >
              <i class="nf nf-fa-bug"></i>
              YARA Rules ({{ yaraRules.length }})
            </button>
          </div>

          <!-- Tactic Section (Sigma only) -->
          <div v-if="activeRuleType === 'sigma'" class="mobile-section">
            <div class="mobile-section-header">Tactic</div>
            <button
              class="mobile-menu-item"
              :class="{ active: selectedTactic === '' }"
              @click="selectedTactic = ''; mobileMenuOpen = false"
            >
              <i class="nf nf-fa-list"></i>
              All Tactics ({{ sigmaRules.length }})
            </button>
            <button
              v-for="tactic in tactics"
              :key="tactic"
              class="mobile-menu-item"
              :class="{ active: selectedTactic === tactic }"
              @click="selectedTactic = tactic; mobileMenuOpen = false"
            >
              {{ tactic }} ({{ sigmaRules.filter(r => r.tactic === tactic).length }})
            </button>
          </div>

          <!-- Severity Section -->
          <div class="mobile-section">
            <div class="mobile-section-header">Severity</div>
            <button
              class="mobile-menu-item"
              :class="{ active: selectedSeverity === '' }"
              @click="selectedSeverity = ''; mobileMenuOpen = false"
            >
              <i class="nf nf-fa-filter"></i>
              All Severities
            </button>
            <button
              class="mobile-menu-item"
              :class="{ active: selectedSeverity === 'critical' }"
              @click="selectedSeverity = 'critical'; mobileMenuOpen = false"
            >
              <span class="severity-badge critical"></span>
              Critical
            </button>
            <button
              class="mobile-menu-item"
              :class="{ active: selectedSeverity === 'high' }"
              @click="selectedSeverity = 'high'; mobileMenuOpen = false"
            >
              <span class="severity-badge high"></span>
              High
            </button>
            <button
              class="mobile-menu-item"
              :class="{ active: selectedSeverity === 'medium' }"
              @click="selectedSeverity = 'medium'; mobileMenuOpen = false"
            >
              <span class="severity-badge medium"></span>
              Medium
            </button>
            <button
              class="mobile-menu-item"
              :class="{ active: selectedSeverity === 'low' }"
              @click="selectedSeverity = 'low'; mobileMenuOpen = false"
            >
              <span class="severity-badge low"></span>
              Low
            </button>
          </div>

          <!-- Log Source Section (Sigma only) -->
          <div v-if="activeRuleType === 'sigma'" class="mobile-section">
            <div class="mobile-section-header">Log Source</div>
            <button
              class="mobile-menu-item"
              :class="{ active: selectedLogSource === '' }"
              @click="selectedLogSource = ''; mobileMenuOpen = false"
            >
              <i class="nf nf-fa-server"></i>
              All Sources
            </button>
            <button
              v-for="source in logSources"
              :key="source"
              class="mobile-menu-item"
              :class="{ active: selectedLogSource === source }"
              @click="selectedLogSource = source; mobileMenuOpen = false"
            >
              {{ source.length > 20 ? source.substring(0, 17) + '...' : source }}
            </button>
          </div>

          <!-- Common Techniques Section (Sigma only) -->
          <div v-if="activeRuleType === 'sigma' && availableCommonTechniques.length > 0" class="mobile-section">
            <div class="mobile-section-header">Technique Frequency</div>
            <button
              class="mobile-menu-item"
              :class="{ active: selectedCommonFilter === '' }"
              @click="selectedCommonFilter = ''; mobileMenuOpen = false"
            >
              <i class="nf nf-fa-list"></i>
              All Techniques
            </button>
            <button
              class="mobile-menu-item"
              :class="{ active: selectedCommonFilter === 'common' }"
              @click="selectedCommonFilter = 'common'; mobileMenuOpen = false"
            >
              <i class="nf nf-fa-star"></i>
              Common Techniques Only ({{ availableCommonTechniques.length }})
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>


  <main class="main">
    <div class="container">
      <!-- Search and Filter -->
      <div class="search-section">
        <div class="search-bar">
          <i class="nf nf-fa-search search-icon"></i>
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search rules..."
            class="search-input"
          >
        </div>
        <div v-if="activeRuleType === 'sigma'" class="filter-section">
          <select v-model="selectedSeverity" class="filter-select">
            <option value="">All Severities</option>
            <option value="critical">Critical</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
          <select v-model="selectedLogSource" class="filter-select">
            <option value="">All Log Sources</option>
            <option v-for="source in logSources" :key="source" :value="source">
              {{ source }}
            </option>
          </select>
          <select v-model="selectedCommonFilter" class="filter-select" v-if="availableCommonTechniques.length > 0">
            <option value="">All Techniques</option>
            <option value="common">Common Techniques Only ({{ availableCommonTechniques.length }})</option>
          </select>
        </div>
      </div>

      <!-- Sigma Rules Grid -->
      <div v-if="activeRuleType === 'sigma'" class="rules-grid">
        <div
          v-for="rule in filteredSigmaRules"
          :key="rule.id"
          class="rule-card"
          :ref="`card-${rule.id}`"
          @click="openModal(rule, $event)"
        >
          <div class="rule-header">
            <h3 class="rule-title">
              <i v-if="isCommonTechnique(rule.technique)" class="nf nf-fa-star common-star" title="Common Technique"></i>
              {{ rule.title }}
            </h3>
            <span class="rule-severity" :class="rule.level" :title="rule.level">
              <i v-if="rule.level === 'critical'" class="nf nf-fa-exclamation_triangle"></i>
              <i v-else-if="rule.level === 'high'" class="nf nf-fa-exclamation"></i>
              <i v-else-if="rule.level === 'medium'" class="nf nf-fa-minus_circle"></i>
              <i v-else-if="rule.level === 'low'" class="nf nf-fa-info_circle"></i>
            </span>
          </div>
          <div class="rule-meta">
            <span v-if="!selectedTactic" class="rule-tactic">
              <i class="nf nf-fa-crosshairs"></i>
              {{ rule.tactic }}
            </span>
            <span class="rule-technique">
              <i class="nf nf-fa-tag"></i>
              {{ rule.technique }}
            </span>
          </div>
        </div>
      </div>

      <!-- YARA Rules Grid -->
      <div v-if="activeRuleType === 'yara'" class="rules-grid">
        <div
          v-for="rule in filteredYaraRules"
          :key="rule.name"
          class="rule-card"
          :ref="`card-${rule.name}`"
          @click="openModal(rule, $event)"
        >
          <div class="rule-header">
            <h3 class="rule-title">{{ rule.name }}</h3>
            <span class="rule-severity" :class="rule.severity" :title="rule.severity">
              <i v-if="rule.severity === 'critical'" class="nf nf-fa-exclamation_triangle"></i>
              <i v-else-if="rule.severity === 'high'" class="nf nf-fa-exclamation"></i>
              <i v-else-if="rule.severity === 'medium'" class="nf nf-fa-minus_circle"></i>
              <i v-else-if="rule.severity === 'low'" class="nf nf-fa-info_circle"></i>
            </span>
          </div>
          <div class="rule-meta">
            <span class="rule-technique">
              <i class="nf nf-fa-tag"></i>
              {{ rule.mitre_attack }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </main>

  <!-- Rule Detail Modal -->
  <Transition
    name="modal"
    @before-enter="beforeEnter"
    @enter="enter"
    @leave="leave"
  >
    <div v-if="selectedRule" class="modal-overlay" @click="closeModal">
      <div class="modal" @click.stop>
        <div class="modal-header">
          <h2>{{ selectedRule.title || selectedRule.name }}</h2>
          <button class="close-btn" @click="closeModal">
            <i class="nf nf-fa-times"></i>
          </button>
        </div>
        <div class="modal-content">
        <div v-if="selectedRule.title" class="rule-details">
          <div v-if="selectedRule.detection" class="detail-row">
            <div class="rule-commands-title">Detection Logic:</div>
            <div class="detection-tabs">
              <button
                class="tab-btn"
                :class="{ active: activeDetectionFormat === 'sigma' }"
                @click="activeDetectionFormat = 'sigma'"
              >
                Sigma
              </button>
              <button
                class="tab-btn"
                :class="{ active: activeDetectionFormat === 'splunk' }"
                @click="activeDetectionFormat = 'splunk'"
              >
                Splunk
              </button>
              <button
                class="tab-btn"
                :class="{ active: activeDetectionFormat === 'sentinel' }"
                @click="activeDetectionFormat = 'sentinel'"
              >
                Sentinel
              </button>
              <button
                class="tab-btn copy-tab"
                @click="copyDetectionLogic(selectedRule, $event)"
                title="Copy detection logic"
              >
                Copy
              </button>
            </div>
            <Transition name="fade" mode="out-in" @before-enter="beforeEnterContent" @enter="enterContent" @before-leave="beforeLeaveContent" @leave="leaveContent">
              <div :key="activeDetectionFormat" class="rule-commands">{{ getFormattedDetection(selectedRule) }}</div>
            </Transition>
          </div>
          <div class="detail-row">
            <strong>Description:</strong> {{ selectedRule.description }}
          </div>

          <div class="rule-info-buttons">
            <span class="info-btn technique-btn" v-if="selectedRule.technique">
              <i class="nf nf-fa-bullseye"></i>
              {{ selectedRule.technique }}
            </span>
            <span class="info-btn product-btn" v-if="selectedRule.logsource?.product">
              <i class="nf nf-fa-server"></i>
              {{ selectedRule.logsource.product }}
            </span>
            <span class="info-btn service-btn" v-if="selectedRule.logsource?.service">
              <i class="nf nf-fa-cogs"></i>
              {{ selectedRule.logsource.service }}
            </span>
            <span class="info-btn status-btn">
              <i class="nf nf-fa-flag"></i>
              {{ selectedRule.status }}
            </span>
          </div>
          <div class="detail-row">
            <strong>Author:</strong> {{ selectedRule.author }}
          </div>
          <div v-if="selectedRule.references?.length" class="detail-row">
            <strong>References:</strong>
            <ul>
              <li v-for="(ref, index) in normalizeReferences(selectedRule.references)" :key="index">
                <a :href="isValidHttpUrl(ref) ? ref : '#'" target="_blank" rel="noopener noreferrer">{{ ref }}</a>
              </li>
            </ul>
          </div>
        </div>
        <div v-else class="rule-details">
          <div v-if="selectedRule.detectionLogic" class="detail-row">
            <div class="rule-commands-title">Detection Logic:</div>
            <div class="detection-tabs">
              <button
                class="tab-btn active"
              >
                YARA
              </button>
              <button
                class="tab-btn copy-tab"
                @click="copyYaraDetectionLogic(selectedRule, $event)"
                title="Copy detection logic"
              >
                Copy
              </button>
            </div>
            <div class="rule-commands">{{ selectedRule.detectionLogic }}</div>
          </div>
          <div class="detail-row">
            <strong>Description:</strong> {{ selectedRule.description }}
          </div>
          <div class="detail-row">
            <strong>Name:</strong> {{ selectedRule.name }}
          </div>
          <div class="detail-row">
            <strong>MITRE:</strong> {{ selectedRule.mitre_attack }}
          </div>
          <div class="detail-row">
            <strong>Severity:</strong> {{ selectedRule.severity }}
          </div>
        </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'

interface SigmaRule {
  id: string
  title: string
  status: string
  description: string
  level: string
  author: string
  date: string
  technique: string | null
  tactic: string
  tags: string[]
  references: string[]
  filename: string
  detection?: any
  logsource?: any
  rawContent?: string
}

interface YaraRule {
  name: string
  filename: string
  description: string
  author: string
  date: string
  severity: string
  mitre_attack: string
  reference: string
  detectionLogic: string
}

type SelectedRule = SigmaRule | YaraRule | null

// Reactive state
const activeRuleType = ref<'sigma' | 'yara'>('sigma')
const searchQuery = ref('')
const selectedTactic = ref('')
const selectedSeverity = ref('')
const selectedLogSource = ref('')
const selectedCommonFilter = ref('')
const selectedRule = ref<SelectedRule>(null)
const mobileMenuOpen = ref(false)
const sigmaRules = ref<SigmaRule[]>([])
const yaraRules = ref<YaraRule[]>([])
const loading = ref(true)
const funnyQuote = ref('')
const cardRect = ref<DOMRect | null>(null)
const isAnimating = ref(false)
const activeDetectionFormat = ref<'sigma' | 'splunk' | 'sentinel'>('sigma')
const tactics = ref<string[]>([])
const uniqueTechniques = ref<string[]>([])
const allLogSources = ref<string[]>([])

// Common Techniques - hard-coded list of most common MITRE ATT&CK techniques
const commonTechniques = [
  'T1082', // System Information Discovery
  'T1106', // Native API
  'T1489', // Service Stop
  'T1036', // Masquerading
  'T1083', // File and Directory Discovery
  'T1055', // Process Injection
  'T1027', // Obfuscated Files or Information
  'T1218', // System Binary Proxy Execution
  'T1059', // Command and Scripting Interpreter
  'T1112', // Modify Registry
  'T1564', // Hide Artifacts
  'T1070', // Indicator Removal
  'T1003', // OS Credential Dumping
  'T1016', // System Network Configuration Discovery
  'T1047', // Windows Management Instrumentation
  'T1057', // Process Discovery
  'T1078', // Valid Accounts
  'T1134', // Access Token Manipulation
  'T1087', // Account Discovery
  'T1012', // Query Registry
  'T1033', // System Owner/User Discovery
  'T1005', // Data from Local System
  'T1071', // Application Layer Protocol
  'T1115', // Clipboard Data
  'T1124', // System Time Discovery
  'T1497', // Virtualization/Sandbox Evasion
  'T1562', // Impair Defenses
  'T1140', // Deobfuscate/Decode Files or Information
  'T1518', // Software Discovery
  'T1049' // System Network Connections Discovery
]

// Computed properties
const logSources = computed(() => {
  if (!selectedTactic.value) {
    return allLogSources.value
  }

  const logSourcesSet = new Set<string>()

  sigmaRules.value
    .filter(rule => rule.tactic.toLowerCase().includes(selectedTactic.value.toLowerCase()))
    .forEach(rule => {
      if (rule.logsource) {
        const product = rule.logsource.product || ''
        const service = rule.logsource.service || ''
        const category = rule.logsource.category || ''

        if (product) logSourcesSet.add(product)
        if (service) logSourcesSet.add(service)
        if (category) logSourcesSet.add(category)
      }
    })

  return Array.from(logSourcesSet).sort()
})

const availableCommonTechniques = computed(() => {
  const tacticRules = selectedTactic.value
    ? sigmaRules.value.filter(rule => rule.tactic.toLowerCase().includes(selectedTactic.value.toLowerCase()))
    : sigmaRules.value

  const tacticTechniques = new Set(tacticRules.map(rule => rule.technique).filter(Boolean))

  return commonTechniques.filter(commonTech =>
    Array.from(tacticTechniques).some(technique => technique!.includes(commonTech))
  )
})

const filteredSigmaRules = computed(() => {
  let filtered = sigmaRules.value

  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(rule =>
      rule.title.toLowerCase().includes(query) ||
      rule.description.toLowerCase().includes(query) ||
      (rule.technique && rule.technique.toLowerCase().includes(query))
    )
  }

  if (selectedTactic.value) {
    filtered = filtered.filter(rule =>
      rule.tactic.toLowerCase().includes(selectedTactic.value.toLowerCase())
    )
  }

  if (selectedSeverity.value) {
    filtered = filtered.filter(rule => rule.level === selectedSeverity.value)
  }

  if (selectedLogSource.value) {
    filtered = filtered.filter(rule => {
      const logSource = rule.logsource
      if (!logSource) return false

      const product = (logSource.product || '').toLowerCase()
      const service = (logSource.service || '').toLowerCase()
      const category = (logSource.category || '').toLowerCase()
      const selected = selectedLogSource.value.toLowerCase()

      return product === selected || service === selected || category === selected
    })
  }

  if (selectedCommonFilter.value === 'common') {
    filtered = filtered.filter(rule => {
      if (!rule.technique) return false
      return availableCommonTechniques.value.some(commonTech => rule.technique!.includes(commonTech))
    })
  }

  // Sort by criticality: critical > high > medium > low
  const severityOrder = { critical: 4, high: 3, medium: 2, low: 1 }
  filtered.sort((a, b) => {
    const aLevel = severityOrder[a.level] || 0
    const bLevel = severityOrder[b.level] || 0
    return bLevel - aLevel
  })

  return filtered
})

const filteredYaraRules = computed(() => {
  if (!searchQuery.value) return yaraRules.value

  const query = searchQuery.value.toLowerCase()
  return yaraRules.value.filter(rule =>
    rule.name.toLowerCase().includes(query) ||
    rule.description.toLowerCase().includes(query) ||
    (rule.mitre_attack && rule.mitre_attack.toLowerCase().includes(query))
  )
})

const totalRules = computed(() => sigmaRules.value.length + yaraRules.value.length)

const coveragePercentage = computed(() => {
  const totalMitreTechniques = 400
  return Math.round((uniqueTechniques.value.length / totalMitreTechniques) * 100)
})

const isCommonTechnique = (technique: string | null): boolean => {
  if (!technique) return false
  return commonTechniques.some(commonTech => technique.includes(commonTech))
}

// Methods
const isValidHttpUrl = (string: string): boolean => {
  try {
    const url = new URL(string)
    return url.protocol === 'http:' || url.protocol === 'https:'
  } catch {
    return false
  }
}

const loadLocalRules = async (): Promise<void> => {
  try {
    console.log('Loading rules from local repository...')
    console.log('Environment:', import.meta.env.MODE)
    console.log('Base URL:', import.meta.env.BASE_URL)

    // Load Sigma rules using Vite's glob import with eager loading for production
    const sigmaFiles = import.meta.glob('../../Sigma/**/*.yml', {
      query: '?raw',
      import: 'default',
      eager: true
    })
    console.log(`Found ${Object.keys(sigmaFiles).length} Sigma files`)
    console.log('Sigma file paths:', Object.keys(sigmaFiles).slice(0, 5)) // Log first 5 for debugging

    let successfulSigmaRules = 0
    for (const [path, content] of Object.entries(sigmaFiles)) {
      try {
        const filename = path.split('/').pop() || ''
        const directory = path.split('/')[3] || '' // Extract directory name

        const rule = parseSigmaRule(content as string, filename, directory)
        if (rule) {
          sigmaRules.value.push(rule)
          successfulSigmaRules++
        }
      } catch (parseError) {
        console.warn(`Failed to parse Sigma rule ${path}:`, parseError)
      }
    }
    console.log(`Successfully parsed ${successfulSigmaRules} Sigma rules`)

    // Load YARA rules using Vite's glob import with eager loading for production
    const yaraFiles = import.meta.glob('../../Yara/*.yar', {
      query: '?raw',
      import: 'default',
      eager: true
    })
    console.log(`Found ${Object.keys(yaraFiles).length} YARA files`)

    let successfulYaraRules = 0
    for (const [path, content] of Object.entries(yaraFiles)) {
      try {
        const filename = path.split('/').pop() || ''
        const rules = parseYaraRules(content as string, filename)
        yaraRules.value.push(...rules)
        successfulYaraRules += rules.length
      } catch (parseError) {
        console.warn(`Failed to parse YARA rule ${path}:`, parseError)
      }
    }
    console.log(`Successfully parsed ${successfulYaraRules} YARA rules`)

    console.log(`Final count: ${sigmaRules.value.length} Sigma rules and ${yaraRules.value.length} YARA rules`)

    if (sigmaRules.value.length === 0 && yaraRules.value.length === 0) {
      console.error('No rules loaded! This might be a build configuration issue.')
    }

    extractMetadata()
  } catch (error) {
    console.error('Error loading rules:', error)
    console.error('This might be a GitHub Pages build issue. Check Vite configuration.')
  } finally {
    loading.value = false
  }
}

const extractMetadata = (): void => {
  const tacticsSet = new Set<string>()
  const techniquesSet = new Set<string>()
  const logSourcesSet = new Set<string>()

  sigmaRules.value.forEach(rule => {
    if (rule.tactic) tacticsSet.add(rule.tactic)
    if (rule.technique) techniquesSet.add(rule.technique)

    if (rule.logsource) {
      const product = rule.logsource.product || ''
      const service = rule.logsource.service || ''
      const category = rule.logsource.category || ''

      if (product) logSourcesSet.add(product)
      if (service) logSourcesSet.add(service)
      if (category) logSourcesSet.add(category)
    }
  })

  yaraRules.value.forEach(rule => {
    if (rule.mitre_attack) techniquesSet.add(rule.mitre_attack)
  })

  // Order tactics by MITRE ATT&CK framework sequence
  const mitreOrder = [
    'Resource Development',
    'Initial Access',
    'Execution',
    'Persistence',
    'Privilege Escalation',
    'Defense Evasion',
    'Credential Access',
    'Discovery',
    'Lateral Movement',
    'Collection',
    'Command and Control',
    'Exfiltration',
    'Impact'
  ]

  const availableTactics = Array.from(tacticsSet)
  tactics.value = mitreOrder.filter(tactic =>
    availableTactics.some(available =>
      available.toLowerCase().includes(tactic.toLowerCase()) ||
      tactic.toLowerCase().includes(available.toLowerCase())
    )
  )

  uniqueTechniques.value = Array.from(techniquesSet).sort()
  allLogSources.value = Array.from(logSourcesSet).sort()
}

const parseSigmaRule = (yamlContent: string, filename: string, directory: string): SigmaRule | null => {
  try {
    const rule = parseSimpleYaml(yamlContent)

    return {
      id: rule.id || filename,
      title: rule.title || 'Untitled',
      status: rule.status || 'experimental',
      description: cleanDescription(rule.description || ''),
      level: rule.level || 'medium',
      author: rule.author || 'Unknown',
      date: rule.date || '',
      technique: rule.technique || extractTechnique(rule.tags || []),
      tactic: mapTacticFromDirectory(directory),
      tags: rule.tags || [],
      references: rule.references || [],
      filename: filename,
      detection: rule.detection || {},
      logsource: rule.logsource || {},
      rawContent: yamlContent
    }
  } catch (error) {
    console.warn(`Failed to parse ${filename}:`, error)
    return null
  }
}

const parseSimpleYaml = (yamlContent: string): Record<string, any> => {
  const lines = yamlContent.split('\n')
  const result: Record<string, any> = {}
  let currentKey: string | null = null
  let currentValue: string[] = []
  let inNestedObject = false
  let nestedObject: Record<string, any> = {}

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i]
    const originalLine = line
    line = line.trim()

    if (line.startsWith('---') || line === '' || line.startsWith('#')) {
      continue
    }

    // Handle main level keys
    if (line.includes(':') && !originalLine.startsWith(' ')) {
      // Save previous key
      if (currentKey) {
        if (inNestedObject && Object.keys(nestedObject).length > 0) {
          result[currentKey] = nestedObject
          nestedObject = {}
          inNestedObject = false
        } else {
          result[currentKey] = processValue(currentValue)
        }
      }

      const [key, ...valueParts] = line.split(':')
      currentKey = key.trim()
      const value = valueParts.join(':').trim()

      if (value === '' || value.startsWith('>') || value.startsWith('|')) {
        currentValue = [value]
        inNestedObject = false
      } else {
        currentValue = [value]
        inNestedObject = false
      }
    }
    // Handle nested content
    else if (currentKey && originalLine.startsWith(' ')) {
      if (line.includes(':') && !line.startsWith('-')) {
        // This is a nested key-value pair
        const [nestedKey, ...nestedValueParts] = line.split(':')
        const nestedValue = nestedValueParts.join(':').trim()
        if (nestedValue === '') {
          // This key expects an array, start collecting it
          if (!nestedObject[nestedKey.trim()]) {
            nestedObject[nestedKey.trim()] = []
          }
        } else {
          nestedObject[nestedKey.trim()] = nestedValue
        }
        inNestedObject = true
      } else {
        // Handle array items within nested objects
        if (inNestedObject && line.startsWith('-')) {
          const arrayItem = line.substring(1).trim().replace(/['"]/g, '')
          // Find the last key that was added to nestedObject
          const lastKey = Object.keys(nestedObject)[Object.keys(nestedObject).length - 1]
          if (lastKey && Array.isArray(nestedObject[lastKey])) {
            nestedObject[lastKey].push(arrayItem)
          } else if (lastKey) {
            nestedObject[lastKey] = [arrayItem]
          }
        } else {
          currentValue.push(originalLine)
        }
      }
    }
  }

  // Handle the last key
  if (currentKey) {
    if (inNestedObject && Object.keys(nestedObject).length > 0) {
      result[currentKey] = nestedObject
    } else {
      result[currentKey] = processValue(currentValue)
    }
  }

  return result
}

const processValue = (valueArray: string[]): any => {
  const combined = valueArray.join('\n').trim()

  // Handle YAML block scalar indicators (>, |, >-, |-)
  if (combined.startsWith('>') || combined.startsWith('|')) {
    const lines = combined.split('\n')
    if (lines.length > 1) {
      return lines.slice(1)
        .filter(line => line.trim())
        .map(line => line.trim())
        .join(' ')
    }
  }

  if (combined.startsWith('[') && combined.endsWith(']')) {
    return combined.slice(1, -1).split(',').map(s => s.trim().replace(/['"]/g, ''))
  }

  if (combined.includes('\n-') || combined.includes('\n  -')) {
    return combined.split('\n')
      .filter(line => line.trim().startsWith('-'))
      .map(line => line.trim().substring(1).trim().replace(/['"]/g, ''))
      .filter(item => item.length > 0)
  }

  // Return as string, not array
  const result = combined.replace(/['"]/g, '').trim()
  return result || combined
}

const extractTechnique = (tags: string[]): string | null => {
  if (!Array.isArray(tags)) return null

  for (const tag of tags) {
    if (typeof tag === 'string' && tag.startsWith('attack.t')) {
      return tag.replace('attack.', '').toUpperCase()
    }
  }
  return null
}

const mapTacticFromDirectory = (directory: string): string => {
  const mapping: Record<string, string> = {
    '02 Resource Development': 'Resource Development',
    '03 Initial Access': 'Initial Access',
    '04 Execution': 'Execution',
    '05 Defense Evasion': 'Defense Evasion',
    '05 Persistence': 'Persistence',
    '06 Privilege Escalation': 'Privilege Escalation',
    '07 Defense Evasion': 'Defense Evasion',
    '08 Credential Access': 'Credential Access',
    '09 Discovery': 'Discovery',
    '10 Lateral Movement': 'Lateral Movement',
    '11 Collection': 'Collection',
    '12 Command and Control': 'Command and Control',
    '13 Exfiltration': 'Exfiltration',
    '14 Impact': 'Impact'
  }
  return mapping[directory] || 'Unknown'
}

const cleanDescription = (description: any): string => {
  if (Array.isArray(description)) {
    description = description.join(' ')
  }
  return description.replace(/\s+/g, ' ').trim()
}

const parseYaraRules = (yaraContent: string, filename: string): YaraRule[] => {
  const rules: YaraRule[] = []
  const ruleMatches = yaraContent.match(/rule\s+(\w+)\s*\{([\s\S]*?)\}/gs)

  if (ruleMatches) {
    for (const match of ruleMatches) {
      const nameMatch = match.match(/rule\s+(\w+)/)
      const metaMatch = match.match(/meta:\s*(.*?)(?=strings:|condition:|$)/s)

      if (nameMatch && metaMatch) {
        const ruleName = nameMatch[1]
        const meta = parseYaraMeta(metaMatch[1])

        // Extract strings and condition sections for detection logic
        const stringsMatch = match.match(/strings:\s*(.*?)(?=condition:|$)/s)
        const conditionMatch = match.match(/condition:\s*(.*?)$/s)

        let detectionLogic = ''
        if (stringsMatch) {
          detectionLogic += 'strings:\n' + stringsMatch[1].trim() + '\n\n'
        }
        if (conditionMatch) {
          detectionLogic += 'condition:\n    ' + conditionMatch[1].trim()
        }

        rules.push({
          name: ruleName,
          filename: filename,
          detectionLogic: detectionLogic.trim(),
          description: meta.description || '',
          author: meta.author || 'Unknown',
          date: meta.date || '',
          severity: meta.severity || 'medium',
          mitre_attack: meta.mitre_attack || '',
          reference: meta.reference || ''
        })
      }
    }
  }

  return rules
}

const parseYaraMeta = (metaText: string): Record<string, string> => {
  const meta: Record<string, string> = {}
  const lines = metaText.split('\n')

  for (const line of lines) {
    const cleanLine = line.trim()
    if (cleanLine.includes('=')) {
      const [key, value] = cleanLine.split('=', 2)
      const cleanKey = key.trim()
      const cleanValue = value.trim().replace(/['"]/g, '')
      meta[cleanKey] = cleanValue
    }
  }

  return meta
}

const normalizeReferences = (references: any): string[] => {
  if (!references) return []

  // If it's already a proper array of strings, return as is
  if (Array.isArray(references) && references.every(ref => typeof ref === 'string' && ref.length > 1)) {
    return references
  }

  // If it's a string that got converted to array of characters, join it back
  if (Array.isArray(references) && references.every(char => typeof char === 'string' && char.length === 1)) {
    return [references.join('')]
  }

  // If it's a string, return as array
  if (typeof references === 'string') {
    return [references]
  }

  // Fallback: convert to string array
  return Array.isArray(references) ? references.map(String) : [String(references)]
}

const formatLogSource = (logsource: any): string => {
  if (!logsource || typeof logsource !== 'object') return 'Unknown'

  const parts: string[] = []
  if (logsource.product) parts.push(`Product: ${logsource.product}`)
  if (logsource.service) parts.push(`Service: ${logsource.service}`)
  if (logsource.category) parts.push(`Category: ${logsource.category}`)

  return parts.length > 0 ? parts.join(', ') : 'Generic'
}

const formatDetection = (detection: any): string => {
  if (!detection || typeof detection !== 'object' || Object.keys(detection).length === 0) {
    return 'No detection logic parsed - check YAML structure'
  }

  let formatted = ''

  // Format each section of the detection
  Object.entries(detection).forEach(([key, value], index) => {
    if (key === 'condition') {
      formatted += `\nCondition: ${value}`
    } else {
      formatted += `${key}:`
      if (typeof value === 'object' && value !== null) {
        if (Array.isArray(value)) {
          value.forEach(item => {
            formatted += `\n    - '${item}'`
          })
        } else {
          Object.entries(value).forEach(([subKey, subValue]) => {
            if (Array.isArray(subValue)) {
              formatted += `\n  ${subKey}:`
              subValue.forEach(item => {
                formatted += `\n    - '${item}'`
              })
            } else {
              formatted += `\n  ${subKey}: ${subValue}`
            }
          })
        }
      } else {
        formatted += `\n  ${value}`
      }
    }

    // Add newline between sections, not after last one
    if (index < Object.keys(detection).length - 1) {
      formatted += '\n'
    }
  })

  return formatted || 'Detection structure exists but content is empty'
}


const getFormattedDetection = (rule: SigmaRule): string => {
  if (!rule.detection) return 'No detection logic available'

  switch (activeDetectionFormat.value) {
    case 'splunk':
      return convertToSplunk(rule)
    case 'sentinel':
      return convertToSentinel(rule)
    default:
      return formatDetection(rule.detection)
  }
}

const convertToSplunk = (rule: SigmaRule): string => {
  const logSource = rule.logsource
  let query = ''

  // Base index/source
  if (logSource?.product === 'windows' && logSource?.service === 'sysmon') {
    query += 'index=sysmon '
  } else if (logSource?.product === 'windows' && logSource?.service === 'security') {
    query += 'index=wineventlog source="WinEventLog:Security" '
  } else if (logSource?.product === 'azure') {
    query += 'index=azure '
  } else {
    query += 'index=* '
  }

  // Add basic search terms from detection
  const detection = rule.detection
  if (detection && typeof detection === 'object') {
    const searchTerms: string[] = []

    Object.entries(detection).forEach(([key, value]) => {
      if (key !== 'condition' && typeof value === 'object') {
        Object.entries(value).forEach(([fieldKey, fieldValue]) => {
          if (Array.isArray(fieldValue)) {
            fieldValue.forEach(item => {
              if (typeof item === 'string' && item.length > 2) {
                searchTerms.push(`"${item}"`)
              }
            })
          } else if (typeof fieldValue === 'string' && fieldValue.length > 2) {
            searchTerms.push(`"${fieldValue}"`)
          }
        })
      }
    })

    if (searchTerms.length > 0) {
      query += `(${searchTerms.slice(0, 5).join(' OR ')}) `
    }
  }

  query += '\n| eval rule_name="' + rule.title + '"'
  query += '\n| eval mitre_technique="' + rule.technique + '"'
  query += '\n| table _time, host, source, rule_name, mitre_technique'

  return query
}

const convertToSentinel = (rule: SigmaRule): string => {
  const logSource = rule.logsource
  let query = ''

  // Base table
  if (logSource?.product === 'windows' && logSource?.service === 'sysmon') {
    query += 'Event\n| where Source == "Microsoft-Windows-Sysmon"\n'
  } else if (logSource?.product === 'windows' && logSource?.service === 'security') {
    query += 'SecurityEvent\n'
  } else if (logSource?.product === 'azure') {
    query += 'AuditLogs\n'
  } else {
    query += 'Event\n'
  }

  // Add basic filters from detection
  const detection = rule.detection
  if (detection && typeof detection === 'object') {
    const filters: string[] = []

    Object.entries(detection).forEach(([key, value]) => {
      if (key !== 'condition' && typeof value === 'object') {
        Object.entries(value).forEach(([fieldKey, fieldValue]) => {
          if (Array.isArray(fieldValue)) {
            const values = fieldValue.filter(item => typeof item === 'string' && item.length > 2)
            if (values.length > 0) {
              filters.push(`(${values.map(v => `EventData contains "${v}"`).join(' or ')})`)
            }
          } else if (typeof fieldValue === 'string' && fieldValue.length > 2) {
            filters.push(`EventData contains "${fieldValue}"`)
          }
        })
      }
    })

    if (filters.length > 0) {
      query += '| where ' + filters.slice(0, 3).join(' or ') + '\n'
    }
  }

  query += `| extend RuleName = "${rule.title}"`
  query += `\n| extend MitreTechnique = "${rule.technique}"`
  query += '\n| project TimeGenerated, Computer, EventData, RuleName, MitreTechnique'

  return query
}

const copyDetectionLogic = async (rule: SigmaRule, event?: Event): Promise<void> => {
  try {
    const detectionText = getFormattedDetection(rule)
    await navigator.clipboard.writeText(detectionText)
    console.log(`${activeDetectionFormat.value.toUpperCase()} detection logic copied to clipboard`)

    // Add click feedback animation
    if (event?.target) {
      const button = event.target as HTMLElement
      button.classList.add('clicked')
      setTimeout(() => button.classList.remove('clicked'), 400)
    }
  } catch (err) {
    console.error('Failed to copy detection logic:', err)
  }
}

const copyYaraDetectionLogic = async (rule: YaraRule, event?: Event): Promise<void> => {
  try {
    await navigator.clipboard.writeText(rule.detectionLogic)
    console.log('YARA detection logic copied to clipboard')

    // Add click feedback animation
    if (event?.target) {
      const button = event.target as HTMLElement
      button.classList.add('clicked')
      setTimeout(() => button.classList.remove('clicked'), 400)
    }
  } catch (err) {
    console.error('Failed to copy YARA detection logic:', err)
  }
}

const openModal = (rule: SelectedRule, event: Event) => {
  const target = event.currentTarget as HTMLElement
  cardRect.value = target.getBoundingClientRect()
  selectedRule.value = rule
}

const closeModal = () => {
  selectedRule.value = null
  cardRect.value = null
}

const getCurrentNavLabel = (): string => {
  // Priority: Rule Type > Tactic > Severity > Log Source
  if (activeRuleType.value === 'yara') {
    return 'YARA Rules'
  }
  if (selectedTactic.value) {
    return selectedTactic.value
  }
  if (selectedSeverity.value) {
    return `${selectedSeverity.value.charAt(0).toUpperCase() + selectedSeverity.value.slice(1)} Severity`
  }
  if (selectedLogSource.value) {
    return selectedLogSource.value
  }
  return 'Sigma Rules'
}

const beforeEnter = (el: Element) => {
  const element = el as HTMLElement
  if (!cardRect.value) return

  const modal = element.querySelector('.modal') as HTMLElement
  if (!modal) return

  const rect = cardRect.value
  const windowWidth = window.innerWidth
  const windowHeight = window.innerHeight

  // Calculate transform from card position to center
  const centerX = windowWidth / 2
  const centerY = windowHeight / 2
  const cardCenterX = rect.left + rect.width / 2
  const cardCenterY = rect.top + rect.height / 2

  const translateX = cardCenterX - centerX
  const translateY = cardCenterY - centerY
  const scaleX = rect.width / 700 // Target modal width
  const scaleY = rect.height / 400 // Target modal height

  // Set initial transform to match card position and size
  modal.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scaleX}, ${scaleY})`
  modal.style.transformOrigin = 'center center'
  element.style.opacity = '0'
}

const enter = (el: Element, done: () => void) => {
  const element = el as HTMLElement
  const modal = element.querySelector('.modal') as HTMLElement
  if (!modal) {
    done()
    return
  }

  // Force reflow
  element.offsetHeight

  // Animate to center position
  element.style.opacity = '1'
  modal.style.transition = 'transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
  modal.style.transform = 'translate(0, 0) scale(1, 1)'

  setTimeout(done, 800)
}

const leave = (el: Element, done: () => void) => {
  const element = el as HTMLElement
  const modal = element.querySelector('.modal') as HTMLElement
  if (!modal) {
    done()
    return
  }

  // Animate to small size and fade out
  modal.style.transition = 'transform 0.4s cubic-bezier(0.55, 0.06, 0.68, 0.19)'
  modal.style.transform = 'translate(0, 0) scale(0.3, 0.3)'
  element.style.transition = 'opacity 0.4s ease'
  element.style.opacity = '0'

  setTimeout(done, 400)
}

const loadRandomQuote = async (): Promise<void> => {
  try {
    const response = await fetch('./assets/funny-quotes.json')
    const quotes = await response.json()
    const randomIndex = Math.floor(Math.random() * quotes.length)
    funnyQuote.value = quotes[randomIndex]
  } catch (err) {
    console.warn('Failed to load funny quotes:', err)
    funnyQuote.value = 'Cybersecurity Detection Rules - Sigma & YARA'
  }
}

// Watchers
watch(selectedRule, (newRule) => {
  if (newRule) {
    // Disable all background scrolling when modal is open
    document.body.style.overflow = 'hidden'
  } else {
    // Restore scrolling when modal is closed
    document.body.style.overflow = 'auto'
  }
})

watch(selectedTactic, () => {
  // Reset common filter when changing tactics if no common techniques available
  if (selectedCommonFilter.value === 'common' && availableCommonTechniques.value.length === 0) {
    selectedCommonFilter.value = ''
  }
})

// Smooth expand/contract with max-height
let previousHeight = 200 // Default starting height

const beforeEnterContent = (el: Element) => {
  const element = el as HTMLElement
  element.style.maxHeight = previousHeight + 'px'
  element.style.opacity = '0'
  element.style.overflow = 'hidden'
  element.style.transition = 'none'
}

const enterContent = (el: Element, done: () => void) => {
  const element = el as HTMLElement

  // Measure target height
  element.style.maxHeight = 'none'
  element.style.height = 'auto'
  const targetHeight = element.scrollHeight
  element.style.maxHeight = previousHeight + 'px'

  // Force reflow and start animation
  element.offsetHeight
  element.style.transition = 'max-height 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.4s ease'
  element.style.maxHeight = targetHeight + 'px'
  element.style.opacity = '1'

  // Store for next transition
  previousHeight = targetHeight

  setTimeout(done, 800)
}

const beforeLeaveContent = (el: Element) => {
  const element = el as HTMLElement
  previousHeight = element.scrollHeight
  element.style.maxHeight = previousHeight + 'px'
  element.style.overflow = 'hidden'
}

const leaveContent = (el: Element, done: () => void) => {
  const element = el as HTMLElement
  element.style.transition = 'opacity 0.4s ease'
  element.style.opacity = '0'
  setTimeout(done, 400)
}

// Lifecycle
onMounted(async () => {
  await loadRandomQuote()
  await loadLocalRules()
})
</script>