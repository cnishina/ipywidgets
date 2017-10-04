/**
 * Jupyter Interactive Widget View JSON schema.
 */
export interface WidgetView {
  /**
   * Format version (major)
   */
  version_major?: number;
  /**
   * Format version (minor)
   */
  version_minor?: number;
  /**
   * Unique identifier of the widget model to be displayed
   */
  model_id: string;
}