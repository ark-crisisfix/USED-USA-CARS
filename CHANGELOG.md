# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/).

## [Unreleased]

### Added

- Added the Cursor project profile in `.cursor/rules/northam-project.mdc` with repository-specific guidance and mandatory changelog upkeep.

### Changed

- Public brand standardized as **NorthAm Cars** / **northamcars.com**, while **Used Cars USA** remains in the SEO layer only.
- Replaced lead capture with direct contact actions: WhatsApp, Telegram, and a prefilled order email template.
- Updated project documentation and internal rules to reflect the static contact CTA flow instead of a server-side lead pipeline.

### Removed

- Removed the unused lead-processing backend (`functions/api/leads.ts`, `lib/leads/*`) and legacy lead-form label helpers.
