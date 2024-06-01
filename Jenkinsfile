pipeline {
    agent any

    environment {
        // Define the directory paths for frontend and backend
        FRONTEND_DIR = 'C:\\Users\\MyDev\\todo-app\\frontend'
        BACKEND_DIR = 'C:\\Users\\MyDev\\todo-app\\backend'
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout the code from your GitHub repository
                git branch: 'main', credentialsId: 'jenkins-example-github-pat', url: 'https://github.com/EngSora/SIT223_6.2HD_App.git'
            }
        }

        stage('Build Backend') {
            steps {
                dir("${env.BACKEND_DIR}") {
                    // Install dependencies and build backend
                    bat 'npm install'
                    bat 'npm run build'
                }
            }
        }

        stage('Build Frontend') {
            steps {
                dir("${env.FRONTEND_DIR}") {
                    // Install dependencies and build frontend
                    bat 'npm install'
                    bat 'npm run build'
                }
            }
        }

        stage('Test Backend') {
            steps {
                dir("${env.BACKEND_DIR}") {
                    // Run backend tests
                    bat 'npm test'
                }
            }
        }

        stage('Test Frontend') {
            steps {
                dir("${env.FRONTEND_DIR}") {
                    // Run frontend tests
                    bat 'npm test'
                }
            }
        }

        stage('Deploy Backend') {
            steps {
                dir("${env.BACKEND_DIR}") {
                    // Run the deploy script for backend
                    bat 'Deploy.bat'
                }
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}
