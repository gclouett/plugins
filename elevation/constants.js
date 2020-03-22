// Config

export const PROFILE_SERVICE_DEFAULT_URL = 'https://geogratis.gc.ca/services/elevation/{{source}}/profile';
export const STATISTICS_SERVICE_DEFAULT_URL = 'https://datacube-dev-static.s3.ca-central-1.amazonaws.com/elevation/{{source}}/stats.json';
export const VIEWSHED_SERVICE_DEFAULT_URL = 'https://datacube-dev-static.s3.ca-central-1.amazonaws.com/elevation/{{source}}/viewshed.json';

export const DEFAULT_ELEVATION_SOURCES = ['cdem', 'cdsm', 'arcticdem2m'];

// Symbols for drawing interactions and results

export const DEFAULT_DRAW_FILL_SYMBOL_COLOR = 'rgba(217,205,229, 0.5)';
export const DEFAULT_DRAW_LINE_SYMBOL_COLOR = '#6A50A3';

// Busines-logic

export const DEFAULT_COORDINATE_ROUNDING_SCALE = 6;

export const VIEWSHED_DEFAULT_OFFSET = 10;
export const VIEWSHED_MAX_OFFSET = 1000;

export const PROFILE_STEP_FACTORS = [5, 10, 20, 50, 100];
export const PROFILE_DEFAULT_STEP_FACTOR = [5, 10, 20, 50, 100];

export const ZOOM_LEVEL_TO_VIEWSHED_RADIUS_MAP = {
  10: 100000,
  11: 51200,
  12: 25600,
  13: 12800,
  14: 6400,
  15: 3200,
  16: 1600,
  17: 800
}

// UI

export const RESULT_PANEL_ID = 'elevationResultPanel';
export const INFOTIP_PANEL_ID = 'elevationInfoTipPanel';

export const DRAWING_LAYER_ID = 'rvElevationDrawing';
export const RESULTS_LAYER_ID = 'rvElevationResults';