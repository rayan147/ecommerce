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
				sh 'docker build -t rayan147/eco-backend-restful-API:latest ./backend'
			}
		}

		stage('Login') {

			steps {
				sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
			}
		}

		stage('Push') {

			steps {
				sh 'docker push rayan147/eco-backend-restful-API:latest ./backend'
			}
		}
	}

	post {
		always {
			sh 'docker logout'
		}
	}

}