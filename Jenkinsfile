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

			steps {
				sh 'docker build -t rayan147/eco-backend-restful-api:latest ./backend'
			}
			steps {
				sh 'docker build -t rayan147/frontend:latest ./frontend/Dockerfile.prod'
			}
			steps {
				sh 'docker build -t rayan147/nginx:latest ./nginx'
			}
			steps {
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
			}
            steps {
				sh 'docker push rayan147/frontend:latest'
			}
			steps {
				sh 'docker push rayan147/nginx:latest'
			}
			steps {
				sh 'docker push rayan147/uploads3:latest'
			}
		}
	}

	post {
		always {
			sh 'docker logout'
		}
	}

}