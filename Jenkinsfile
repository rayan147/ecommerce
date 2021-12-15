pipeline{

	agent {label 'prod-slave'}

	environment {
		DOCKERHUB_CREDENTIALS=credentials('dockerhub')
	}

	stages {
	    
	    stage('gitclone') {

			steps {
				git 'https://github.com/rayan147/ecommerce.git'
			}
		}

		stage('Build') {
              environment { 
                    REDIS_SERVER_IP='redis'
                }
			steps {
				sh 'echo $REDIS_PORT'
				sh 'docker build -t rayan147/eco-backend-restful-api:latest ./backend'
                sh 'docker build -t rayan147/frontend:latest ./frontend/'
                sh 'docker build -t rayan147/nginx:latest ./nginx'
                sh 'docker build -t rayan147/uploads3:latest ./uploadS3'
			}
		
		}

		stage('Login') {

			steps {
				sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
			}
		}

		stage('Push') {

			steps {
				sh 'docker push rayan147/eco-backend-restful-api:latest'
                sh 'docker push rayan147/frontend:latest'
                sh 'docker push rayan147/nginx:latest'
                sh 'docker push rayan147/uploads3:latest'
			}
		}
	
		stage('Deploy') {
			
			steps {
				sh 'cd /home/ubuntu/projects/ecommerce'
				sh 'git pull origin master'
				sh 'ls -ltra'
				sh 'docker-compose stop'
				sh 'docker-compose up --build'
			}
		}
	}

	post {
		always {
			sh 'docker logout'
		}
	}

}