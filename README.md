<div align="center">
  <img src="https://bafkreihge6rx6ykdcdmspwvh4oweojqsvzoyhjgqp6yfqkgo2b45l27auq.ipfs.w3s.link/" alt="OpenDrive Logo" width="150px" />
  <h1>OpenDrive</h1>
  <p><em>Secure, Decentralized Storage by The Open Crypto Foundation</em></p>

  <p>
    <a href="https://github.com/opencryptofoundation/opendrive/blob/main/LICENSE.md">
      <img src="https://img.shields.io/badge/License-MIT%20%26%20Apache--2.0-blue.svg" alt="License: MIT & Apache-2.0">
    </a>
    <a href="https://github.com/opencryptofoundation/opendrive/actions">
      <img src="https://github.com/opencryptofoundation/opendrive/workflows/CI/badge.svg" alt="CI Status">
    </a>
    <a href="https://t.me/opencryptofoundation">
      <img src="https://img.shields.io/badge/chat-telegram-blue?logo=telegram" alt="Chat on Telegram">
    </a>
  </p>
</div>

## Overview

OpenDrive is a next-generation decentralized storage platform built on content-addressing principles to provide secure, resilient, and censorship-resistant file storage. Developed by The Open Crypto Foundation, OpenDrive leverages distributed networks to ensure your data remains accessible and tamper-evident.

### Why OpenDrive?

- **Content-Addressed Storage**: Files are identified by their cryptographic hash, not by location, ensuring content integrity and authenticity
- **Decentralized Architecture**: No single point of failure or control
- **Cryptographic Verification**: Every file is cryptographically verified using advanced algorithms
- **Intuitive Interface**: Modern, responsive design with seamless user experience
- **Flexible Storage Plans**: From free personal use to enterprise-scale solutions

## Features

- 📤 **Simple File Upload**: Drag-and-drop or browser-based file selection
- 🔐 **Secure Authentication**: Email-based verification with private key security
- 📂 **Directory Support**: Upload entire folders while preserving structure
- 🔄 **Versioning**: Track changes to files over time
- 🔍 **Easy Retrieval**: Access your files from anywhere with content-based addressing
- 📊 **Storage Management**: Monitor usage and manage your storage allocation
- 📱 **Mobile Responsive**: Access from any device with our responsive interface

## Technical Foundation

OpenDrive is built on IPFS (InterPlanetary File System) technology, which provides content-addressed storage through distributed hash tables and directed acyclic graphs. This gives your data several advantages:

- Content is retrieved based on what it is, not where it is
- Files are automatically deduplicated across the network
- Built-in versioning through content-addressing
- Resilience against network partitions and censorship

For developers, OpenDrive offers:
- TypeScript-based architecture with strict typing
- React components for seamless integration
- Comprehensive documentation and examples
- RESTful API endpoints for programmatic access

## Getting Started

To begin using OpenDrive, simply:

1. Visit [app.opendrive.opencrypto.org](https://app.opendrive.opencrypto.org)
2. Create an account or sign in
3. Start uploading your files
4. Share content using content-addressed links

For developers wanting to contribute to the project:

```bash
# Clone the repository
git clone https://github.com/opencryptofoundation/opendrive.git
cd opendrive

# Install dependencies
pnpm install

# Start the development server
cd app
pnpm dev
```

## Documentation

- [User Guide](https://docs.opendrive.opencrypto.org/user-guide)
- [Developer Documentation](https://docs.opendrive.opencrypto.org/developers)
- [API Reference](https://docs.opendrive.opencrypto.org/api)
- [Technical Whitepaper](https://docs.opendrive.opencrypto.org/whitepaper)

## Storage Plans

| Plan | Storage | Monthly Price | Features |
|------|---------|---------------|----------|
| Basic | 5GB | Free | Content addressing, Basic file sharing |
| Standard | 100GB | $12.99 | Enhanced redundancy, Priority uploads |
| Professional | 1TB | $49.99 | Advanced analytics, Multiple accounts |
| Enterprise | 5TB+ | Custom | Dedicated support, Custom API access |

## About The Open Crypto Foundation

The Open Crypto Foundation is dedicated to advancing decentralized technologies that enhance privacy, security, and data ownership. Through open-source development and education, we're creating a more resilient and user-controlled digital ecosystem.

## Contributing

We welcome contributions from the community! Please see our [Contributing Guide](CONTRIBUTING.md) for more information on how to get involved.

## Security

The security of our users' data is paramount. If you discover a security issue, please report it confidentially to [security@opencryptofoundation.org](mailto:security@opencryptofoundation.org).

## License

OpenDrive is dual-licensed under MIT and Apache 2.0 licenses. See [LICENSE.md](LICENSE.md) for more details.
