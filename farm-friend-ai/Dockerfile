# Use the official Python image from Docker Hub
FROM python:3.10-slim

# Set the working directory in the container to /app
WORKDIR /app

# Copy the requirements file into the container
COPY requirements.txt .

# Install the necessary packages
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application code into the container
COPY . .

# Expose any necessary ports (if applicable)
EXPOSE 5000

# Command to run the application
CMD ["python", "app.py"]
