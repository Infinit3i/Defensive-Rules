<template>
  <header class="header">
    <div class="container">
      <div class="header-content">
        <div class="header-left">
          <h1 class="title">
            <i class="nf nf-fa-shield"></i>
            Defensive Rules Repository
          </h1>
          <p class="subtitle">Cybersecurity Detection Rules - Sigma & YARA</p>
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
      <!-- Mobile Hamburger -->
      <div class="mobile-nav">
        <button class="hamburger-btn" @click="mobileMenuOpen = !mobileMenuOpen">
          <i class="nf nf-fa-bars"></i>
          {{ selectedTactic || 'All Tactics' }}
        </button>

        <div class="mobile-rule-types">
          <button
            class="mobile-rule-type-btn"
            :class="{ active: activeRuleType === 'sigma' }"
            @click="activeRuleType = 'sigma'"
          >
            Sigma
          </button>
          <button
            class="mobile-rule-type-btn"
            :class="{ active: activeRuleType === 'yara' }"
            @click="activeRuleType = 'yara'"
          >
            YARA
          </button>
        </div>
      </div>

      <!-- Desktop Tactic Navigation -->
      <div class="tactic-nav desktop-only">
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
          <button
            class="mobile-tactic-item"
            :class="{ active: selectedTactic === '' }"
            @click="selectedTactic = ''; mobileMenuOpen = false"
          >
            <i class="nf nf-fa-list"></i>
            All Tactics ({{ sigmaRules.length }})
          </button>
          <button
            v-for="tactic in tactics"
            :key="tactic"
            class="mobile-tactic-item"
            :class="{ active: selectedTactic === tactic }"
            @click="selectedTactic = tactic; mobileMenuOpen = false"
          >
            {{ tactic }} ({{ sigmaRules.filter(r => r.tactic === tactic).length }})
          </button>
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

        <div class="filters">
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
        </div>
      </div>

      <!-- Sigma Rules Grid -->
      <div v-if="activeRuleType === 'sigma'" class="rules-grid">
        <div
          v-for="rule in filteredSigmaRules"
          :key="rule.id"
          class="rule-card"
          @click="selectedRule = rule"
        >
          <div class="rule-header">
            <h3 class="rule-title">{{ rule.title }}</h3>
            <div class="rule-actions">
              <button
                class="copy-btn"
                @click.stop="copyRule(rule)"
                title="Copy rule"
              >
                <i class="nf nf-fa-copy"></i>
              </button>
              <span class="rule-severity" :class="rule.level">{{ rule.level }}</span>
            </div>
          </div>
          <div class="rule-meta">
            <span class="rule-tactic">
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
          @click="selectedRule = rule"
        >
          <div class="rule-header">
            <h3 class="rule-title">{{ rule.name }}</h3>
            <span class="rule-severity" :class="rule.severity">{{ rule.severity }}</span>
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
  <div v-if="selectedRule" class="modal-overlay" @click="selectedRule = null">
    <div class="modal" @click.stop>
      <div class="modal-header">
        <h2>{{ selectedRule.title || selectedRule.name }}</h2>
        <button class="close-btn" @click="selectedRule = null">
          <i class="nf nf-fa-times"></i>
        </button>
      </div>
      <div class="modal-content">
        <div v-if="selectedRule.title" class="rule-details">
          <div v-if="selectedRule.detection" class="detail-row">
            <div class="detection-header">
              <div class="rule-commands-title">Detection Logic:</div>
              <button
                class="detection-copy-btn"
                @click="copyDetectionLogic(selectedRule)"
                title="Copy detection logic"
              >
                <i class="nf nf-fa-copy"></i>
                Copy
              </button>
            </div>
            <div class="rule-commands">{{ formatDetection(selectedRule.detection) }}</div>
          </div>
          <div class="detail-row">
            <strong>Description:</strong> {{ selectedRule.description }}
          </div>
          <div class="detail-row">
            <strong>Level:</strong> {{ selectedRule.level }}
          </div>
          <div class="detail-row">
            <strong>Technique:</strong> {{ selectedRule.technique }}
          </div>
          <div v-if="selectedRule.logsource" class="detail-row">
            <strong>Log Source:</strong> {{ formatLogSource(selectedRule.logsource) }}
          </div>
          <div class="detail-row">
            <strong>ID:</strong> {{ selectedRule.id }}
          </div>
          <div class="detail-row">
            <strong>Status:</strong> {{ selectedRule.status }}
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
          <div class="detail-row">
            <strong>Name:</strong> {{ selectedRule.name }}
          </div>
          <div class="detail-row">
            <strong>MITRE:</strong> {{ selectedRule.mitre_attack }}
          </div>
          <div class="detail-row">
            <strong>Severity:</strong> {{ selectedRule.severity }}
          </div>
          <div class="detail-row">
            <strong>Description:</strong> {{ selectedRule.description }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

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
}

type SelectedRule = SigmaRule | YaraRule | null

// Reactive state
const activeRuleType = ref<'sigma' | 'yara'>('sigma')
const searchQuery = ref('')
const selectedTactic = ref('')
const selectedSeverity = ref('')
const selectedLogSource = ref('')
const selectedRule = ref<SelectedRule>(null)
const mobileMenuOpen = ref(false)
const sigmaRules = ref<SigmaRule[]>([])
const yaraRules = ref<YaraRule[]>([])
const loading = ref(true)
const tactics = ref<string[]>([])
const uniqueTechniques = ref<string[]>([])
const allLogSources = ref<string[]>([])

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
      const sourceString = `${logSource.product || ''} ${logSource.service || ''} ${logSource.category || ''}`.toLowerCase()
      return sourceString.includes(selectedLogSource.value.toLowerCase())
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
      technique: extractTechnique(rule.tags || []),
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
        nestedObject[nestedKey.trim()] = nestedValue
        inNestedObject = true
      } else {
        currentValue.push(originalLine)
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
  const ruleMatches = yaraContent.match(/rule\s+(\w+)\s*{([^}]*meta:[^}]*?)}/gs)

  if (ruleMatches) {
    for (const match of ruleMatches) {
      const nameMatch = match.match(/rule\s+(\w+)/)
      const metaMatch = match.match(/meta:\s*(.*?)(?=strings:|condition:|$)/s)

      if (nameMatch && metaMatch) {
        const ruleName = nameMatch[1]
        const meta = parseYaraMeta(metaMatch[1])

        rules.push({
          name: ruleName,
          filename: filename,
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
      formatted += `Condition: ${value}`
    } else {
      formatted += `${key}:`
      if (typeof value === 'object' && value !== null) {
        if (Array.isArray(value)) {
          value.forEach((item, idx) => {
            formatted += `\n  [${idx}]: ${item}`
          })
        } else {
          Object.entries(value).forEach(([subKey, subValue]) => {
            if (Array.isArray(subValue)) {
              formatted += `\n  ${subKey}:`
              subValue.forEach(item => {
                formatted += `\n    - ${item}`
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

const copyRule = async (rule: SigmaRule): Promise<void> => {
  try {
    const content = rule.rawContent || 'Raw content not available'
    await navigator.clipboard.writeText(content)
    console.log('Rule copied to clipboard')
  } catch (err) {
    console.error('Failed to copy rule:', err)
  }
}

const copyDetectionLogic = async (rule: SigmaRule): Promise<void> => {
  try {
    const detectionText = formatDetection(rule.detection)
    await navigator.clipboard.writeText(detectionText)
    console.log('Detection logic copied to clipboard')
  } catch (err) {
    console.error('Failed to copy detection logic:', err)
  }
}

// Lifecycle
onMounted(async () => {
  await loadLocalRules()
})
</script>