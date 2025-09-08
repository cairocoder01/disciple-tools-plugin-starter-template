/**
 * DT Plugin Starter Template - Vue.js Admin Component
 * This script registers a Vue component with the DT Admin app
 */

// Define the Vue component for this plugin's admin interface
const PluginStarterTemplateAdmin = {
  template: `
    <div class="plugin-starter-template-admin">
      <h1>Plugin Starter Template Admin</h1>
      <p>Welcome to the Plugin Starter Template administration interface.</p>

      <div class="plugin-content">
        <div class="section">
          <h2>Plugin Information</h2>
          <p>This is a demonstration of how WordPress plugins can integrate with the DT Admin Vue.js application.</p>
          <p>Plugin features and configuration options can be added here.</p>
        </div>

        <div class="section">
          <h3>Configuration Options</h3>
          <div class="form-group">
            <label for="plugin-setting-1">Example Setting:</label>
            <input type="text" id="plugin-setting-1" v-model="exampleSetting" class="form-control" />
          </div>
          <div class="form-group">
            <label>
              <input type="checkbox" v-model="enableFeature" /> Enable Plugin Feature
            </label>
          </div>
          <button @click="saveSettings" class="btn btn-primary">Save Settings</button>
        </div>

        <div class="section" v-if="showStatus">
          <div class="alert alert-success">
            Settings saved successfully!
          </div>
        </div>
      </div>
    </div>
  `,
  data() {
    return {
      exampleSetting: 'Default value',
      enableFeature: false,
      showStatus: false
    }
  },
  mounted() {
    console.log('Plugin Starter Template admin component mounted');
    this.loadSettings();
  },
  methods: {
    loadSettings() {
      // In a real implementation, you would load settings from WordPress REST API
      console.log('Loading plugin settings...');
    },
    saveSettings() {
      // In a real implementation, you would save settings via WordPress REST API
      console.log('Saving settings:', {
        exampleSetting: this.exampleSetting,
        enableFeature: this.enableFeature
      });

      this.showStatus = true;
      setTimeout(() => {
        this.showStatus = false;
      }, 3000);
    }
  }
};

// Define a dashboard tile component for the admin dashboard slot
const PluginStarterTemplateDashboardTile = {
  template: `
    <div class="plugin-starter-template-tile">
      <div class="tile-header">
        <h3>Plugin Starter Template</h3>
        <span class="tile-status" :class="{ 'active': pluginActive }">{{ pluginActive ? 'Active' : 'Inactive' }}</span>
      </div>
      <div class="tile-content">
        <p>Quick overview of the Plugin Starter Template status and key metrics.</p>
        <div class="tile-stats">
          <div class="stat">
            <span class="stat-label">Version:</span>
            <span class="stat-value">{{ pluginVersion }}</span>
          </div>
          <div class="stat">
            <span class="stat-label">Status:</span>
            <span class="stat-value">{{ pluginStatus }}</span>
          </div>
        </div>
      </div>
      <div class="tile-actions">
        <button @click="openPluginAdmin" class="tile-btn">Configure Plugin</button>
        <button @click="refreshStats" class="tile-btn secondary">Refresh</button>
      </div>
    </div>
  `,
  inject: ['router'],
  data() {
    return {
      pluginActive: true,
      pluginVersion: '1.0.0',
      pluginStatus: 'Running'
    }
  },
  mounted() {
    console.log('Plugin Starter Template dashboard tile mounted');
  },
  methods: {
    openPluginAdmin() {
      // Navigate to the plugin's admin page using injected router
      if (this.router) {
        this.router.push('/dt-admin/extensions/plugin-starter-template');
      } else {
        console.error('Router not available for navigation');
      }
    },
    refreshStats() {
      // Refresh plugin statistics
      console.log('Refreshing plugin stats...');
      this.pluginStatus = 'Updated';
      setTimeout(() => {
        this.pluginStatus = 'Running';
      }, 2000);
    }
  }
};

// Wait for DOM to be ready, then register the plugin
document.addEventListener('DOMContentLoaded', function() {
  // Add some basic styles for the plugin admin interface
  const styles = `
    <style id="plugin-starter-template-admin-styles">
      .plugin-starter-template-admin {
        max-width: 800px;
      }

      .plugin-starter-template-admin .section {
        margin-bottom: 30px;
        padding: 20px;
        background: #f9f9f9;
        border: 1px solid #ddd;
        border-radius: 4px;
      }

      .plugin-starter-template-admin .form-group {
        margin-bottom: 15px;
      }

      .plugin-starter-template-admin label {
        display: block;
        margin-bottom: 5px;
        font-weight: 500;
      }

      .plugin-starter-template-admin .form-control {
        width: 100%;
        max-width: 300px;
        padding: 8px 12px;
        border: 1px solid #ddd;
        border-radius: 4px;
      }

      .plugin-starter-template-admin .btn {
        padding: 10px 20px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-weight: 500;
      }

      .plugin-starter-template-admin .btn-primary {
        background: #0073aa;
        color: white;
      }

      .plugin-starter-template-admin .btn-primary:hover {
        background: #005177;
      }

      .plugin-starter-template-admin .alert {
        padding: 12px;
        border-radius: 4px;
        margin-top: 15px;
      }

      .plugin-starter-template-admin .alert-success {
        background: #d4edda;
        border: 1px solid #c3e6cb;
        color: #155724;
      }

      /* Dashboard Tile Styles */
      .plugin-starter-template-tile {
        border: 1px solid #dee2e6;
        border-radius: 8px;
        overflow: hidden;
        background: #ffffff;
      }

      .plugin-starter-template-tile .tile-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px 20px;
        background: #f8f9fa;
        border-bottom: 1px solid #dee2e6;
      }

      .plugin-starter-template-tile .tile-header h3 {
        margin: 0;
        font-size: 1.1em;
        color: #495057;
      }

      .plugin-starter-template-tile .tile-status {
        padding: 4px 12px;
        border-radius: 20px;
        font-size: 0.85em;
        font-weight: 500;
        background: #6c757d;
        color: white;
      }

      .plugin-starter-template-tile .tile-status.active {
        background: #28a745;
      }

      .plugin-starter-template-tile .tile-content {
        padding: 20px;
      }

      .plugin-starter-template-tile .tile-content p {
        margin: 0 0 15px 0;
        color: #6c757d;
      }

      .plugin-starter-template-tile .tile-stats {
        display: flex;
        gap: 20px;
        margin-bottom: 15px;
      }

      .plugin-starter-template-tile .stat {
        display: flex;
        flex-direction: column;
      }

      .plugin-starter-template-tile .stat-label {
        font-size: 0.85em;
        color: #6c757d;
        margin-bottom: 2px;
      }

      .plugin-starter-template-tile .stat-value {
        font-weight: 600;
        color: #495057;
      }

      .plugin-starter-template-tile .tile-actions {
        padding: 15px 20px;
        background: #f8f9fa;
        border-top: 1px solid #dee2e6;
        display: flex;
        gap: 10px;
      }

      .plugin-starter-template-tile .tile-btn {
        padding: 8px 16px;
        border: 1px solid #0073aa;
        border-radius: 4px;
        background: #0073aa;
        color: white;
        cursor: pointer;
        font-size: 0.9em;
        font-weight: 500;
        text-decoration: none;
        transition: all 0.2s ease;
      }

      .plugin-starter-template-tile .tile-btn:hover {
        background: #005177;
        border-color: #005177;
      }

      .plugin-starter-template-tile .tile-btn.secondary {
        background: transparent;
        color: #0073aa;
      }

      .plugin-starter-template-tile .tile-btn.secondary:hover {
        background: #0073aa;
        color: white;
      }
    </style>
  `;

  // Only add styles if not already present
  if (!document.getElementById('plugin-starter-template-admin-styles')) {
    document.head.insertAdjacentHTML('beforeend', styles);
  }

  // Register the plugin with DT Admin
  function registerWithDTAdmin() {
    if (window.dtApp && typeof window.dtApp.registerPlugin === 'function') {
      const pluginRegistered = window.dtApp.registerPlugin({
        name: 'Plugin Starter Template',
        path: 'plugin-starter-template',
        component: PluginStarterTemplateAdmin
      });

      if (pluginRegistered) {
        console.log('Plugin Starter Template successfully registered with DT Admin');
      } else {
        console.error('Failed to register Plugin Starter Template with DT Admin');
      }
    }

    // Register the dashboard tile component
    if (window.dtApp && typeof window.dtApp.registerSlot === 'function') {
      const tileRegistered = window.dtApp.registerSlot({
        name: 'admin-dashboard',
        component: PluginStarterTemplateDashboardTile,
        id: 'plugin-starter-template-dashboard-tile'
      });

      if (tileRegistered) {
        console.log('Plugin Starter Template dashboard tile successfully registered');
      } else {
        console.error('Failed to register Plugin Starter Template dashboard tile');
      }
    } else {
      console.warn('DT Admin registerSlot method not available, retrying in 500ms...');
      setTimeout(registerWithDTAdmin, 500);
    }
  }

  registerWithDTAdmin();
});
