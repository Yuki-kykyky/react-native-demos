# react native 练习记录

android 手机端查看需通过 tunnel 方式启动，否则无法访问。启用 tunnel 需安装 `"@expo/ngrok": "^4.1.3"` 依赖。

执行 `npm run start-phone` 在手机端查看。

## Project 1 - 任务清单

### 目标
1. 【布局】页面分为操作区域和展示区域。操作区域稳定的位于页面顶部；当没有内容可展示时，展示区域为空。
2. 【功能】点击操作区域，出现弹窗覆盖整个页面。弹窗包含：图片展示、输入框、操作按钮【cancel｜add】
   - 点击cancel，关闭弹窗。
   - 点击add，关闭弹窗，输入框内容新加至展示区。
   - 关闭弹窗后，输入框内容不保留。
3. 【功能】点击展示区域具体内容，删除该条内容。
4. 【样式】若展示区域内容超出页面长度，出现滚动条。

### 任务拆解
1. 页面布局
   - [x] 操作区域占比 **1/10**，包含一个可点击按钮，文案为`Add Goal`
   - [x] 展示区域占比 **9/10**，当没有内容可展示时，展示区域为空。
2. 弹窗
   - [x] 点击`Add Goal`按钮，出现弹窗覆盖整个页面。弹窗包含：图片展示、输入框、操作按钮【cancel｜add】
   - [x] 点击cancel，关闭弹窗。点击add，关闭弹窗，输入框内容新加至展示区。 关闭弹窗后，输入框内容不保留。
3. 展示区域
   - [x] 点击展示区域具体内容，删除该条内容。
   - [x] 若展示区域内容超出页面长度，出现滚动条。

## Project 2 - 猜数游戏

### 目标
1. 【布局】整体分为3个页面：游戏开始 / 游戏中 /游戏结束。
    - 游戏开始：包含目标数输入框和操作按钮，操作按钮包含【reset,guess】。
    - 游戏中：包含猜数展示区、提示操作按钮、猜数记录展示区，操作按钮包含【-,+】。
    - 游戏结束：包含图片展示，总结文字展示，【start new game】按钮。
2. 【功能】
   1. 游戏开始：
        - 猜数输入框只支持2位数且只能输入数字【数字键盘】。
        - 点击reset，输入框清空。
        - 点击guess，(happy path) 若输入内容有效，跳转至「游戏中」页面。(unhappy path) 若输入内容无效，出现弹窗提示，点击弹窗内按钮，清空输入框，重新输入。
   2. 游戏中：
        - 如果当前猜数等于目标数，跳转至「游戏结束」页面。
        - 点击 +【higher】，进行下次猜数。猜数范围在 `已知最小数-当前数` 之间。
        - 点击 -【lower】，进行下次猜数。猜数范围在 `当前数-已知最大数` 之间。
        - 如果点击选项与事实相违背，（例如目标数为90，猜数为23，点击了 +【higher】）出现弹窗提示。停留在当前页面，不进行下次猜数。
        - 猜数记录展示区展示最新的猜数数据。
   3. 游戏结束：点击 start new game，返回游戏开始界面。
3. 【重构】抽页面组件、页面通用组件，统一管理颜色。
4. 【样式】页面背景由背景图片叠加渐变混色而成。若猜数记录展示区超出页面长度，出现滚动条。游戏结束界面的图片展示范围为圆形，总结文字中包含特殊样式文字。支持特殊字体样式。

### 任务拆解
1. 统一布局
   - [x] 页面背景由背景图片叠加渐变混色而成。 
   - [x] 3个页面有通用的页面标题。
   - [x] 页面颜色统一管理。
2. 游戏开始页面
   - [ ] 目标数输入框只支持2位数且只能输入数字【数字键盘】。
   - [ ] 操作按钮包含【reset,guess】。点击reset，输入框清空。
   - [ ] 点击guess，(happy path) 若输入内容有效，跳转至「游戏中」页面。
   - [ ] 点击guess，(unhappy path) 若输入内容无效，出现弹窗提示，点击弹窗内按钮，回到游戏开始界面，输入框清空。
3. 游戏中页面
   - [ ] 设置 min = 0, max = 100。猜数展示区展示随机生成的 min - max 之间的数字，记当前生成数为 a 。
   - [ ] 操作提示区域包含提示语及操作按钮【-,+】。点击 +【higher】，替换 max = a，进行下次猜数。
   - [ ] 点击 -【lower】，替换 min = a，进行下次猜数。
   - [ ] 如果点击选项与事实相违背，出现弹窗提示。停留在当前页面，不进行下次猜数。
   - [ ] 猜数记录展示区展示猜数记录。猜数记录由 `猜数轮次 + 猜数数值 + 下次猜数范围` 组成。最新的猜数轮次在最上方。
   - [ ] 若猜数记录展示区超出页面长度，出现滚动条。
   - [ ] 如果当前猜数等于目标数，跳转至「游戏结束」页面。
4. 游戏结束页面
   - [ ] 页面包含图片展示，图片展示范围为圆形。
   - [ ] 页面中出现总结文字，总结文字中包含特殊样式文字。支持特殊字体样式。
   - [ ] 页面中存在【start new game】按钮。点击 start new game，返回游戏开始界面。