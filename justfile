# List available recipes
default:
    @just --list

# Install dependencies
deps:
    npm i

# Set up development environment (install dependencies and pre-commit hooks)
setup: deps
    pre-commit install

# Run the docs site locally
dev:
    npm run dev
