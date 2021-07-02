const log = require('npmlog')

const minimist = require('minimist')
const program = require('commander')

log.verbose('校验入参：')
let args = minimist(process.argv.slice(2))
log.verbose('args: ', args)

if (args['_'].length === 0 && !args.debug) {
  log.warn('请输入参数')
} else {
  // 可以在这配置debug相关设置，比如修改log的等级为verbose来打印调试日志
  if (args.debug) process.env.DEBUGGING = 'verbose'
  else process.env.DEBUGGING = 'info'
  log.level = process.env.DEBUGGING
}

// 设置版本号、自定义用法说明
program.version(packageJson.version).usage('<command> [options] 其他说明')

// 添加命令可以在这里添加
program
  .command('test')
  .description('描述')
  .option('-a, --all', '清空全部')
  .action((cmd, options) => {
    // cmd.all 自动由上面配置 .option("-a, --all", "清空全部") 创建
    console.log('cmd: ', cmd.all)
    log.success('测试', '一只花喵')
  })

// 其他子命令
program.command('*').action(function(cmd, options) {
  console.log('cmd: ', cmd)
  console.log('options: ', options.args)
  console.log('没有匹配到命令：miao', args['_'])
})

// 注册命令
program.option('--debug', '打开调试模式').parse(process.argv)

module.exports = log
