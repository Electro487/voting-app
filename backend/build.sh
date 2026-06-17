#!/bin/bash
# Build script for Render

# Install Python dependencies
pip install -r requirements.txt

# Run migrations on the Render-provided database
python manage.py migrate

# Collect static files (for serving them later)
python manage.py collectstatic --noinput