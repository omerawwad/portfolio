FROM openjdk:21-jdk-slim
VOLUME /tmp
COPY target/portfolio-0.0.1-SNAPSHOT.jar app.jar
ENTRYPOINT ["java", "-jar", "/app.jar"]
