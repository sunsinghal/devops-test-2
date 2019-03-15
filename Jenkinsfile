pipeline {
    agent any

    environment {
        DOCKER_IMAGE_TAG = "node-app:${BUILD_ID}"
    }
	
    stages {
        stage('Containerizing App') {
            steps {
                sh 'echo packaging application in a docker image'
                sh '''
                docker build -t ${DOCKER_IMAGE_TAG} .
                '''
            }
        }
        stage('Lint'){
            steps {
                sh 'echo running ESLint, use npm run fixlint for fixing the issues'
                sh '''
                docker run --rm -i ${DOCKER_IMAGE_TAG} npm run lint
                '''
            }
        }
        stage('Coverage'){
            steps {
                sh 'echo running jest code coverage'
                sh '''
                docker run --rm -i ${DOCKER_IMAGE_TAG} npm run cov
                '''
            }
        }
        stage('Unit Tests') {
            steps {
                sh 'echo running unit test'
                sh '''
                docker run --rm -i ${DOCKER_IMAGE_TAG} npm run unit-test
                '''
            }
        }
	stage('Deploy App') {
            steps {
                sh 'echo deploying app to expose API endpoint'
                sh '''
                docker run -d -p 3000:3000 ${DOCKER_IMAGE_TAG} npm run start
                '''
            }
        }
    }
}