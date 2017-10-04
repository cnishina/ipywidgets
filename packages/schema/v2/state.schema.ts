/**
 * Jupyter Interactive Widget State JSON schema.
 */
export interface WidgetState {
  /**
   * Format version (major)
   */
  version_major: number;
  /**
   * Format version (minor)
   */
  version_number: number;
  /**
   * Model State for All Widget Models - keys are model ids, values are model state
   */
  state: ModelState;
}

/**
 * Model State for All Widget Models - keys are model ids, values are model state
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
  /**
   * Binary buffers in the state
   */
  buffers?: BinaryBuffer[];
}

/**
 * Binary buffers in the state
 */
export interface BinaryBuffer {
  /**
   * A path for a binary buffer value.
   */
  path: (string|number)[];
  /**
   * A binary buffer encoded as specified in the 'encoding' property
   */
  data: string;
  /**
   * The encoding of the buffer data
   */
  encoding: Encoding;
}

/**
 * The encoding of the buffer data
 * hex: Base 16 encoding, as specified in RFC 4648, section 8 (https://tools.ietf.org/html/rfc4648#section-8)
 * base64: Base 64 encoding, as specified in RFC 4648, section 4 (https://tools.ietf.org/html/rfc4648#section-4)
 */
export enum Encoding {
  /**
   * Base 16 encoding, as specified in RFC 4648, section 8 (https://tools.ietf.org/html/rfc4648#section-8)
   */
  hex = "hex",
  /**
   * Base 64 encoding, as specified in RFC 4648, section 4 (https://tools.ietf.org/html/rfc4648#section-4)
   */
  base64 = "base64"
}
