pipeline {
    agent any

    triggers {
        pollSCM('H/5 * * * *')
    }

    options {
        timestamps()
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install dependencies') {
            steps {
                script {
                    if (isUnix()) {
                        sh 'npm ci'
                        sh 'npx playwright install --with-deps chromium'
                    } else {
                        bat 'npm ci'
                        bat 'npx playwright install chromium'
                    }
                }
            }
        }

        stage('Run Playwright tests') {
            steps {
                script {
                    if (isUnix()) {
                        sh 'npm test'
                    } else {
                        bat 'npm test'
                    }
                }
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'playwright-report/**,test-results/**', allowEmptyArchive: true
        }
    }
}
