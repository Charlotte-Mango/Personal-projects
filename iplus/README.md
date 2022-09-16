# 项目笔记
## overflow:hidden失效问题
==问题==
indexWork组件中的事业介绍按钮中，:befor用圆来模拟按钮右侧的渐变区域时，:before使用定位，而a没有使用定位时，overflow:hidden失效。
==解决==
为a标签加上相对定位
