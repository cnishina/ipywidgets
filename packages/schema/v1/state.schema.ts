/**
 * Jupyter Interactive Widget State JSON schema
 */
export interface WidgetState {
  /**
   * Format version (major)
   */
  version_major: number;
  /**
   * Format version (minor)
   */
  version_minor: number;
  /**
   * Model State for All Widget Models
   */
  state: ModelState;
}

/**
 * Model State for All Widget Models
 */
export interface ModelState {
  /**
   * Name of the JavaScript class holding the model implementation
   */
  model_name: string;
  /**
   * Name of the JavaScript module holding the model implementation
   */
  model_module: string;
  /**
   * Semver range for the JavaScript module holding the model implementation
   */
  model_module_version?: string;
  /**
   * Serialized state of the model
   */
  state: object;
}