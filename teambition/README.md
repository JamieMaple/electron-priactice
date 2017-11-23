# practice

### counter

### to-do-list

### async


### problems

1. webpack 加载 ts 过慢 -- 让 ts 处理 缓存

```javascript
        use: {
          loader: 'awesome-typescript-loader',
          options: {
            useCache: true,
            usePrecompiledFiles: true
          }
        }
```

需要注意的是happypack目前不支持 `awaresome-typescript-loader`

1. 利用到了 `happypack` 处理 js 和 css，速度还可以
