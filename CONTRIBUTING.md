# Contributing to OpenDrive

Thank you for your interest in contributing to OpenDrive by The Open Crypto Foundation! We're excited to have you join our community.

This document provides guidelines and instructions for contributing to this project. By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md).

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)
- [Testing](#testing)
- [Documentation](#documentation)
- [Community](#community)

## Code of Conduct

OpenDrive has adopted a Code of Conduct that we expect project participants to adhere to. Please read [the full text](CODE_OF_CONDUCT.md) so that you can understand what actions will and will not be tolerated.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or later)
- [pnpm](https://pnpm.io/) (v8 or later)
- [Git](https://git-scm.com/)

### Initial Setup

1. Fork the repository on GitHub
2. Clone your fork locally:
   ```bash
   git clone https://github.com/YOUR-USERNAME/opendrive.git
   cd opendrive
   ```
3. Add the original repository as an upstream remote:
   ```bash
   git remote add upstream https://github.com/opencryptofoundation/opendrive.git
   ```
4. Install dependencies:
   ```bash
   pnpm install
   ```

## Development Workflow

1. Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```
   or
   ```bash
   git checkout -b fix/issue-you-are-fixing
   ```

2. Make your changes, following our [coding standards](#coding-standards)

3. Run tests to ensure your changes don't break existing functionality:
   ```bash
   pnpm test
   ```

4. Commit your changes with a clear, descriptive commit message:
   ```bash
   git commit -m "Add feature: your feature description"
   ```

5. Push your branch to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```

6. Create a Pull Request from your fork to the main repository

## Pull Request Process

1. Ensure your PR includes only the changes relevant to your feature or bug fix
2. Update documentation if necessary
3. Include tests for new functionality
4. Ensure all tests pass before submitting
5. Reference any related issues in your PR description using the syntax `Fixes #123` or `Relates to #123`
6. Wait for a maintainer to review your PR - be responsive to feedback and requested changes

## Coding Standards

### TypeScript/JavaScript

- We use TypeScript for type safety
- Follow the ESLint rules defined in the project
- Use async/await over Promise chains
- Prefer functional programming patterns where appropriate

### React Components

- Use functional components with hooks
- Separate presentational and container components
- Use Tailwind CSS for styling
- Follow component naming convention: `PascalCase.tsx`

### CSS/Styling

- Use Tailwind CSS utility classes
- For custom styles, follow BEM naming convention
- Keep component-specific styles close to the component

## Testing

- Write unit tests for utility functions
- Write component tests for React components
- Ensure tests are covering both success and failure cases

## Documentation

- Document public APIs and components
- Update README.md when adding major features
- Use JSDoc comments for functions and components
- Keep documentation up-to-date with code changes

## Community

### Communication Channels

- [GitHub Issues](https://github.com/opencryptofoundation/opendrive/issues) - For bug reports and feature requests
- [Telegram Group](https://t.me/opencryptofoundation) - For community discussions
- Email: [dev@opencryptofoundation.org](mailto:dev@opencryptofoundation.org) - For sensitive communications

### Reporting Bugs

- Use the GitHub issue tracker
- Provide a clear description of the issue
- Include steps to reproduce
- Include version information

### Feature Requests

- Use the GitHub issue tracker
- Clearly describe the desired functionality
- Explain the use case
- (Optional) Suggest an implementation approach

## Recognition

Contributors are recognized in the following ways:
- Listed in CONTRIBUTORS.md file
- Mentioned in release notes for significant contributions
- Receive developer swag for major contributions

---

Thank you for contributing to OpenDrive by The Open Crypto Foundation! Your efforts help make decentralized storage more accessible to everyone.
