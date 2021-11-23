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

## deploy & destroy

### https://syonet.work

already setting aws config.

```
yarn deploy:www
```

```
yarn destroy:www
```

### https://storybook.syonet.work

already settings provider aws in [Serverless Dashboard](https://app.serverless.com/) and create cloudformation stack.

```
yarn build-storybook
yarn deploy:storybook
```

```
yarn destroy:storybook
```
