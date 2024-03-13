pipeline {
    agent any

    stages{
        stage('Setup'){
            steps{
                echo 'npm install'
            }
        }
        stage('Test'){
            steps{
                echo 'NO_COLOR=1 npm run cy:run | true'
            }
        }
        stage('Deploy'){
            steps{
                publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: false, reportDir: 'mochawesome-report', reportFiles: 'exercicio-e2e-result.html', reportName: 'EBAC Report', reportTitles: '', useWrapperFileDirectly: true])
            }
        }
    }
}