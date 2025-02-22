/*
  # Initial Database Schema

  1. New Tables
    - users
      - id (uuid, primary key)
      - email (text, unique)
      - full_name (text)
      - risk_level (text)
      - experience_level (text)
      - created_at (timestamptz)
    
    - portfolios
      - id (uuid, primary key)
      - user_id (uuid, foreign key)
      - total_value (numeric)
      - cash_balance (numeric)
      - created_at (timestamptz)
      - updated_at (timestamptz)

    - market_updates
      - id (uuid, primary key)
      - title (text)
      - content (text)
      - category (text)
      - published_at (timestamptz)
      - created_at (timestamptz)

    - broker_comparisons
      - id (uuid, primary key)
      - broker_name (text)
      - country (text)
      - fee_structure (jsonb)
      - features (jsonb)
      - rating (numeric)
      - created_at (timestamptz)
      - updated_at (timestamptz)

  2. Security
    - Enable RLS on all tables
    - Add policies for user access
*/

-- Users table
CREATE TABLE users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  full_name text,
  risk_level text,
  experience_level text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE users ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own data"
  ON users
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

-- Portfolios table
CREATE TABLE portfolios (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id),
  total_value numeric DEFAULT 0,
  cash_balance numeric DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE portfolios ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own portfolio"
  ON portfolios
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

-- Market Updates table
CREATE TABLE market_updates (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  content text NOT NULL,
  category text,
  published_at timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE market_updates ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read market updates"
  ON market_updates
  FOR SELECT
  TO authenticated
  USING (true);

-- Broker Comparisons table
CREATE TABLE broker_comparisons (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  broker_name text NOT NULL,
  country text NOT NULL,
  fee_structure jsonb NOT NULL,
  features jsonb NOT NULL,
  rating numeric,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE broker_comparisons ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read broker comparisons"
  ON broker_comparisons
  FOR SELECT
  TO authenticated
  USING (true);