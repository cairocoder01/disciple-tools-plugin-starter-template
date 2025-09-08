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
    </style>
  `;

  // Only add styles if not already present
  if (!document.getElementById('plugin-starter-template-admin-styles')) {
    document.head.insertAdjacentHTML('beforeend', styles);
  }

  // Register the plugin with DT Admin
  if (window.dtApp && typeof window.dtApp.registerPlugin === 'function') {
    const registered = window.dtApp.registerPlugin({
      name: 'Plugin Starter Template',
      path: 'plugin-starter-template',
      component: PluginStarterTemplateAdmin
    });

    if (registered) {
      console.log('Plugin Starter Template successfully registered with DT Admin');
    } else {
      console.error('Failed to register Plugin Starter Template with DT Admin');
    }
  }
});
