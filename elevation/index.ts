// import { UIManager } from './ui-manager';
import { UI } from './ui';

export default class ElevationServicePlugin {

  private mapApi;

  private isPluginActive;

  private pluginButton;
  private ui;

  togglePluginState() {

    let isActive = this.isPluginActive;

    if (isActive) {
      this.deactivate();
    } else {
      this.activate();
    }

    this.pluginButton.isActive = !isActive;
    this.isPluginActive = !isActive;

  }

  activate() {
    this.ui.show();
  }

  deactivate() {
    this.ui.hide();
  }


  init(mapApi: any) {

    this.isPluginActive = false;

    let config = this._RV.getConfig('plugins').elevation;
    config.language = this._RV.getCurrentLang();

    this.ui = new UI(mapApi, config);

    this.pluginButton = mapApi.mapI.addPluginButton(
      ElevationServicePlugin.prototype.translations[config.language].pluginName,
      this.togglePluginState.bind(this)
    );

    console.info('Elevation service plugin loaded...');

  }

  destroy() {
    this.ui.destroy();
    console.info('Elevation service plugin destroyed...');
  }

}

export default interface ElevationServiceInterface {

  _RV: any;
  translations: any;

}

ElevationServicePlugin.prototype.translations = {
  'en-CA': {
    pluginName: 'Elevation Service',
    toolbar: {
      profile: {
        label: 'Elevation Profile',
        tooltip: 'Elevation Profile'
      },
      statistics: {
        label: 'Elevation Statistics',
        tooltip: 'Elevation Statistics'
      }
    },
    infoPanel: {
      title: {
        profile: 'Elevation Profile',
        statistics: 'Elevation Statistics',
      },
      header: {
        downloadBtn: {
          tooltip: 'Download as JSON'
        }
      },
      stepMenuBtn: {
        tooltip: 'Number of interpolated points'
      },
      statsSourceMenuBtn: {
        tooltip: 'Elevation Type'
      },
      statsSource: {
        cdem: 'Elevation Model (CDEM)',
        cdsm: 'Surface Model (CDSM)'
      },
      stats: {
        elevation: {
          label: 'Elevation',
          unit: '(meters)',
          min: 'Minimum',
          max: 'Maximum',
          mean: 'Mean'
        },
        slope: {
          label: 'Slope',
          unit: '(%)',
          min: 'Minimum',
          max: 'Maximum',
          mean: 'Mean'
        },
        aspect: {
          label: 'Slope Aspect',
          unit: '(% of surface)',
          north: 'Northerly',
          south: 'Southerly',
          east: 'Easterly',
          west: 'Westerly',
          flat: 'Flat'
        },
      },
      smoothProfileBtn: {
        label: 'Smooth Profile'
      },
      retryBtn: {
        label: 'Try again'
      },
      refreshBtn: {
        label: 'Refresh'
      },
      chart: {
        label: 'Elevation Profile',
        xAxisLabel: 'Cumulative distance along profile (kilometers)',
        yAxisLabel: 'Elevation (meters)'
      }
    }

      // draw: {
      //     menu: 'Draw Toolbar',
      //     picker: 'Select color',
      //     point: 'Draw point',
      //     line: 'Draw line',
      //     polygon: 'Draw polygon',
      //     measure: 'Show/Hide measures',
      //     extent: 'Erase selected graphics',
      //     write: 'Save to download folder',
      //     read: 'Upload graphics file'
      // }
  },
  'fr-CA': {
    pluginName: 'Service d\'élévation',
    toolbar: {
      profile: {
        label: 'Profil d\'élévation',
        tooltip: 'Profil d\'élévation'
      },
      statistics: {
        label: 'Statistiques d\'élévation',
        tooltip: 'Statistiques d\'élévation'
      }
    },
    infoPanel: {
      title: {
        profile: 'Profil d\'élévation',
        statistics: 'Statistiques d\'élévation',
      },
      header: {
        downloadBtn: {
          tooltip: 'Télécharger en format JSON'
        }
      },
      stepMenuBtn: {
        tooltip: 'Nombre de points à interpoler'
      },
      statsSourceMenuBtn: {
        tooltip: 'Type de données d\'élévation'
      },
      statsSource: {
        cdem: 'Modèle d\'élévation (CDEM)',
        cdsm: 'Modèle de surface (CDSM)'
      },
      stats: {
        elevation: {
          label: 'Élévation',
          unit: '(en mètres)',
          min: 'Minimum',
          max: 'Maximum',
          mean: 'Moyenne'
        },
        slope: {
          label: 'Pente',
          unit: '(en %)',
          min: 'Minimum',
          max: 'Maximum',
          mean: 'Moyenne'
        },
        aspect: {
          label: 'Orientation de la pente',
          unit: '(en % de la superficie)',
          north: 'Vers le nord',
          south: 'Vers le nord',
          east: 'Vers l\'est',
          west: 'Vers l\'ouest',
          flat: 'Aucune orientation (plat)'
        },
      },
      smoothProfileBtn: {
        label: 'Arrondir le tracé'
      },
      retryBtn: {
        label: 'Essayer à nouveau'
      },
      refreshBtn: {
        label: 'Actualiser'
      },
      chart: {
        label: 'Profil d\'élévation',
        xAxisLabel: 'Distance cumulée le long du profil (en kilomètres)',
        yAxisLabel: 'Élévation (en mètres)'
      }
    }


      // draw: {
      //     menu: 'Barre de dessin',
      //     picker: 'Sélectionner la couleur',
      //     point: 'Dessiner point',
      //     line: 'Dessiner ligne',
      //     polygon: 'Dessiner polygon',
      //     measure: 'Afficher/Cacher les mesures',
      //     extent: 'Effacer les graphiques sélectionnés',
      //     write: 'Sauvegarder dans le répertoire téléchargement',
      //     read: 'Charger le fichier de graphiques'
      // }
  }
};

(<any>window).elevation = ElevationServicePlugin;