# 使用方法
	npm i syc-rem
#### 暴露一个函数，接受两个参数。已做1px=1物理像素的适配。
+ ratio:Number
	+ rem单位与设备宽度的比例，默认1:16.
+ scale:Boolean
	+ 是否允许用户缩放，默认false

```
	import rem from 'rem';
	rem(ratio,scale);
```
#### 使用less混合，让rem适配更简单
```
	@targetW:750; //定义设计图宽度
	@rem:16;	//定义rem比例
	@import "node_modules/syc-rem/rem.less" //根据路径自己选择
	.rem(200,key)
	.rem2(200,400,key)
	.rem3(200,400,100,key)
	.rem4(200,400,100,200,key)
```
