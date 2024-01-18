# Use an official OpenJDK runtime as a parent image
FROM openjdk:17-jdk-slim

# Set the working directory to /app
WORKDIR /app

# Copy the backend JAR file from the target directory to the container at /app
COPY target/mw_pvl-0.0.1-SNAPSHOT.jar .

# Specify the port number the container should expose
EXPOSE 8080

# Run the backend application
CMD ["java", "-jar", "mw_pvl-0.0.1-SNAPSHOT.jar"]
