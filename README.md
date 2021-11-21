# syonet_eight

## Settings

```
git clone https://github.com/igara/syonet_eight.git --recursive
# --recursive をつけ忘れた際は下記を実行
(cd syonet_eight && git submodule update --init もしくは git submodule update --init --remote projects/syonet_eight_www)

cd syonet_eight
yarn
```

## start development

```
yarn dev
```

## test & lint

```
yarn lint
yarn test
```

## storybook

```
yarn storybook
```

## deploy

```
yarn deploy:www
```
