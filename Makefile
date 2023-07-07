run:
	docker run -d -p 3000:4200 -v logs:/app/data --name my_app --rm vshaitanov/test_app
run-dev:
	docker run -d -p 3000:4200 -v "D:\Multimedia\DEVELOPMENT\Docker_example:/app" -v /app/node_modules -v logs:/app/data --name my_app --rm vshaitanov/test_app
stop:
	docker stop my_app