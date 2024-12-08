#!/bin/bash

# Stop the development server if it's running
kill $(lsof -t -i:3000)

# Optional: Commands to clear databases or Redis
# redis-cli FLUSHALL
# echo "Cleared Redis Cache"

# Clear local storage files if stored locally
# rm -rf ./path_to_local_storage

# Restart the development server
yarn dev