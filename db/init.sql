CREATE TABLE admin_users (
  id          INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  email       VARCHAR(255) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE payment_pages (
  id           INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  slug         VARCHAR(100) NOT NULL UNIQUE,
  title        VARCHAR(255) NOT NULL,
  description  TEXT,
  header_msg   TEXT,
  footer_msg   TEXT,
  brand_color  VARCHAR(7) DEFAULT '#000000',
  logo_url     VARCHAR(500),
  -- fixed | min_max | user_entered
  amount_mode  ENUM('fixed', 'min_max', 'user_entered') NOT NULL DEFAULT 'user_entered',
  fixed_amount DECIMAL(10, 2),
  min_amount   DECIMAL(10, 2),
  max_amount   DECIMAL(10, 2),
  gl_codes     JSON,
  email_template TEXT,
  is_active    BOOLEAN NOT NULL DEFAULT TRUE,
  created_by   INT UNSIGNED NOT NULL,
  created_at   TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at   TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (created_by) REFERENCES admin_users(id)
);

CREATE TABLE custom_fields (
  id           INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  page_id      INT UNSIGNED NOT NULL,
  label        VARCHAR(255) NOT NULL,
  -- text | number | dropdown | date | checkbox
  field_type   ENUM('text', 'number', 'dropdown', 'date', 'checkbox') NOT NULL,
  options      JSON,
  required     BOOLEAN NOT NULL DEFAULT FALSE,
  placeholder  VARCHAR(255),
  helper_text  VARCHAR(255),
  display_order SMALLINT UNSIGNED NOT NULL DEFAULT 0,
  FOREIGN KEY (page_id) REFERENCES payment_pages(id) ON DELETE CASCADE
);

CREATE TABLE transactions (
  id             INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  page_id        INT UNSIGNED NOT NULL,
  amount         DECIMAL(10, 2) NOT NULL,
  -- credit_card | ach | wallet
  payment_method ENUM('credit_card', 'ach', 'wallet') NOT NULL,
  -- pending | success | failed
  status         ENUM('pending', 'success', 'failed') NOT NULL DEFAULT 'pending',
  processor_tx_id VARCHAR(255),
  payer_name     VARCHAR(255),
  payer_email    VARCHAR(255),
  gl_code        VARCHAR(100),
  created_at     TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (page_id) REFERENCES payment_pages(id)
);

CREATE TABLE field_responses (
  id             INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  transaction_id INT UNSIGNED NOT NULL,
  field_id       INT UNSIGNED NOT NULL,
  value          TEXT,
  FOREIGN KEY (transaction_id) REFERENCES transactions(id) ON DELETE CASCADE,
  FOREIGN KEY (field_id) REFERENCES custom_fields(id)
);
