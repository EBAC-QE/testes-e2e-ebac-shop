pipeline {
    agent any
    
    stages {
     
        stage('Setup') {
            steps {
                bat 'npm install'  
            }
        }
        
        stage('Test') {
            steps {
                 bat 'set NO_COLOR=1 && npm run cy:run' // Exemplo com npm
            }
        }
        
        stage('Deploy') {
            steps {       
                publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: false, reportDir: 'mochawesome-report', reportFiles: 'mochawesome.html', reportName: 'EBAC TEST Report', reportTitles: '', useWrapperFileDirectly: true])            }
        }
    }
    

}
