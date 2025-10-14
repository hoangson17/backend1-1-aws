#lấy image từ 1 hệ điều hành
FROM alpine:latest

# Chọn folder làm việc
WORKDIR /app

# cài đặt nodejs và npm
RUN apk add --update nodejs npm

#copy pakage.json và package-lock.json
COPY package*.json ./

# cài đặt các dependencies
RUN npm install

# copy mã nguần
COPY . .

# cài đặt port
EXPOSE 3000

#Chạy app
CMD ["npm","run","start:dev"]