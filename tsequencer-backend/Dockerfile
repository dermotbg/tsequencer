FROM mcr.microsoft.com/dotnet/sdk

WORKDIR /usr/src/app

EXPOSE 5179

COPY . .

ENV ASPNETCORE_SERVER.URLS=http://0.0.0.0:5179/

ENV ASPNETCORE_ENVIRONMENT=Production

CMD ["dotnet", "run"]