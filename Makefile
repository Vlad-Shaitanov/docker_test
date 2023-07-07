run:
	docker run -d -p 3000:3000 --name my_app --rm vshaitanov/test_app
stop:
	docker stop my_app