pipeline{
   agent any 
    environment {
      registry = 'rayan147/ecommerce'
      registryCredential = '79c0e82e-d596-4999-90bd-d759317cda6f'
      dockerImage = '' 
  
}
    stages{
        stage('Clone git repo'){
            steps{
                git 'https://github.com/rayan147/ecommerce.git'
            }
        }
        stage('Build docker image'){
            steps{
              script {
                    dockerImage = docker.build(registry)
                }
            }
        }
    }
}
