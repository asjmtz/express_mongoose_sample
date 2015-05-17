#  express_mongoose_sample


### install

```
git clone git@github.com:asjmtz/express_mongoose_sample.git
cd express_mongoose_sample
npm install
```

### run


**connect mongodb**

```
cd yourpath/express_mongoose_sample
mkdir data
mongod --dbpath yourpath/express_mongoose_sample/data
```

**app start**
```
npm start
```

** forever **
```
forever -p . -w start ./bin/www
```

demo runs at [http://localhost:3000/](http://localhost:3000/)

