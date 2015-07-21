# jQuery.cssAssist

## jQuery.cssAssist.js

_もうCSSファイルにたくさんの数値設定CLASSを記述する必要はなし！_<br />
_このスクリプトが、シンプルなCLASS指定をstyleに展開して自動設定します。_<br />
_No need to write a lot of numeric setting CLASS to CSS file!_<br />
_This script will automatically set Expand the simple CLASS specified in the style._<br />


<table style="width:96%;" align="center">
	            <tr>
	                <th rowspan="2">prefix</th>
	                <th rowspan="2">property</th>
	                <th rowspan="2">value</th>
	                <th>exsample1</th>
	                <th>parsed</th>
	            </tr>
	            <tr>
	                <th>exsample2</th>
	                <th>parsed</th>
	            </tr>
	            <tr>
	                <td rowspan="2">w-</td>
	                <td rowspan="2">width</td>
	                <td rowspan="2">number (+ unit)</td>
	                <td>class="w-36"</td>
	                <td>style="width:36px;"</td>
	            </tr>
	            <tr>
	                <td>class="w-98p"</td>
	                <td>style="width:98%;"</td>
	            </tr>
	            <tr>
	                <td rowspan="2">h-</td>
	                <td rowspan="2">height</td>
	                <td rowspan="2">number (+ unit)</td>
	                <td>class="h-66"</td>
	                <td>style="height:66px;"</td>
	            </tr>
	            <tr>
	                <td>class="h-12%"</td>
	                <td>style="height:12%;"</td>
	            </tr>
	            <tr>
	                <td rowspan="2">mt-<br />mr-<br />mb-<br />ml-</td>
	                <td rowspan="2">margin-top<br />margin-right<br />margin-bottom<br />margin-left</td>
	                <td rowspan="2">number (+ unit)</td>
	                <td>class="ml-22 mb-10"</td>
	                <td>style="margin-left:22px;margin-bottom:10px;"</td>
	            </tr>
	            <tr>
	                <td>class="mt--15"</td>
	                <td>style="margin-top:-15px;"</td>
	            </tr>
	            <tr>
	                <td rowspan="2">mauto-</td>
	                <td rowspan="2">margin</td>
	                <td rowspan="2">number (+ unit)</td>
	                <td>class="mauto-0"</td>
	                <td>style="margin:0 auto;"</td>
	            </tr>
	            <tr>
	                <td>mauto--10"</td>
	                <td>style="margin:-10px auto;"</td>
	            </tr>
	            <tr>
	                <td rowspan="2">pt-<br />pr-<br />pb-<br />pl-</td>
	                <td rowspan="2">padding-top<br />padding-right<br />padding-bottom<br />padding-left</td>
	                <td rowspan="2">number (+ unit)</td>
	                <td>class="pl-22 pb-10"</td>
	                <td>style="padding-left:22px;padding-bottom:10px;"</td>
	            </tr>
	            <tr>
	                <td>class="pt--15"</td>
	                <td>(no set)</td>
	            </tr>
	            <tr>
	                <td rowspan="2">f-</td>
	                <td rowspan="2">font-size</td>
	                <td rowspan="2">number (+ unit)</td>
	                <td>class="f-24"</td>
	                <td>style="font-size:24px;"</td>
	            </tr>
	            <tr>
	                <td>class="f-2.4rem"</td>
	                <td>style="font-size:2.4rem;"</td>
	            </tr>
	            <tr>
	                <td rowspan="2">al-</td>
	                <td rowspan="2">text-align</td>
	                <td rowspan="2">0: left<br />1: center<br />2: right<br />3: justify</td>
	                <td>class="al-1"</td>
	                <td>style="text-align:center;"</td>
	            </tr>
	            <tr>
	                <td>class="al-0"</td>
	                <td>style="text-align:left;"</td>
	            </tr>
	            <tr>
	                <td rowspan="2">vl-</td>
	                <td rowspan="2">vertical-align</td>
	                <td rowspan="2">0: top<br />1: middle<br />2: bottom</td>
	                <td>class="vl-1"</td>
	                <td>style="vertical-align:middle;"</td>
	            </tr>
	            <tr>
	                <td colspan="2">* wrapped &lt;div style="display:table"&gt;...&lt;/div&gt;</pre></td>
	            </tr>
	            
	        </table>
