FROM nginx:alpine
COPY ./welcome-to-osu/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx","-g","daemon off;"]