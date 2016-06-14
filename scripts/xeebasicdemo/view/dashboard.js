/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=anonymous 
  **/ 
 /*#*SCRIPTR_PLUGIN*#*{"metadata":{"name":"CodeMirrorArbitraryFile","plugindata":{"fileData":"<html>\n\t<head><title>My Car's dashboard</title></head>\n\t<script>\n      function getCar() {\n\t\t\t\n        var xhr = new XMLHttpRequest();\n        xhr.open(\"GET\", \"https://api.scriptrapps.io/xeebasicdemo/api/car?auth_token=?YOUR_SCRIPTR_AUTH_TOKEN\");\n        xhr.send();\n        xhr.onload = function() {\n          \n          var httpResponse = JSON.parse(xhr.responseText);\n          updateCarView(httpResponse.response.result.plateNumber, httpResponse.response.result.make, httpResponse.response.result.model);\n        };\n\n        xhr.onerror = function(error) {\n          alert(error);\n        };\n      }\n\n      function updateCarView(plateNumberParam, makeParam, modelParam) {\n\n\t\tdocument.getElementById(\"make\").innerHTML = makeParam;\n        document.getElementById(\"model\").innerHTML = modelParam;\n        document.getElementById(\"plateNum\").innerHTML = plateNumberParam;\n      }\n\t</script>\n\t<body onload=\"getCar()\">\n\t\t<table align=\"center\">\n\t\t\t<tr>\n\t\t\t\t<td colspan=\"3\" style=\"font-size:36px;font-family:calibri\">\t\t\t\t\t\n\t\t\t\t\t<span id=\"make\"></span>\n\t\t\t\t\t<span id=\"model\"></span>\n\t\t\t\t\t<span id=\"plateNum\"></span>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<td>\n\t\t\t\t\t<iframe width=\"600px\" height=\"500px\" src=\"https://iotdemos.scriptrapps.io/xeebasicdemo/view/fuellevel\" frameborder=\"0\"></iframe>\n\t\t\t\t</td>\t\t\t\n\t\t\t\t<td>\n\t\t\t\t\t<iframe width=\"600px\" height=\"500px\" src=\"https://iotdemos.scriptrapps.io/xeebasicdemo/view/vehiclespeed\" frameborder=\"0\"></iframe>\n\t\t\t\t</td>\t\t\t\n\t\t\t\t<td>\n\t\t\t\t\t<iframe width=\"600px\" height=\"500px\" src=\"https://iotdemos.scriptrapps.io/xeebasicdemo/view/enginespeed\" frameborder=\"0\"></iframe>\n\t\t\t\t</td>\n\t\t\t</tr>\t\n\t\t</table>\n\t</body>\n</html>"},"scriptrdata":[]}}*#*#*/
var content= '<html>\n\
	<head><title>My Car\'s dashboard</title></head>\n\
	<script>\n\
      function getCar() {\n\
			\n\
        var xhr = new XMLHttpRequest();\n\
        xhr.open(\"GET\", \"https://api.scriptrapps.io/xeebasicdemo/api/car?auth_token=?YOUR_SCRIPTR_AUTH_TOKEN\");\n\
        xhr.send();\n\
        xhr.onload = function() {\n\
          \n\
          var httpResponse = JSON.parse(xhr.responseText);\n\
          updateCarView(httpResponse.response.result.plateNumber, httpResponse.response.result.make, httpResponse.response.result.model);\n\
        };\n\
\n\
        xhr.onerror = function(error) {\n\
          alert(error);\n\
        };\n\
      }\n\
\n\
      function updateCarView(plateNumberParam, makeParam, modelParam) {\n\
\n\
		document.getElementById(\"make\").innerHTML = makeParam;\n\
        document.getElementById(\"model\").innerHTML = modelParam;\n\
        document.getElementById(\"plateNum\").innerHTML = plateNumberParam;\n\
      }\n\
	</script>\n\
	<body onload=\"getCar()\">\n\
		<table align=\"center\">\n\
			<tr>\n\
				<td colspan=\"3\" style=\"font-size:36px;font-family:calibri\">					\n\
					<span id=\"make\"></span>\n\
					<span id=\"model\"></span>\n\
					<span id=\"plateNum\"></span>\n\
				</td>\n\
			</tr>\n\
			<tr>\n\
				<td>\n\
					<iframe width=\"600px\" height=\"500px\" src=\"https://iotdemos.scriptrapps.io/xeebasicdemo/view/fuellevel\" frameborder=\"0\"></iframe>\n\
				</td>			\n\
				<td>\n\
					<iframe width=\"600px\" height=\"500px\" src=\"https://iotdemos.scriptrapps.io/xeebasicdemo/view/vehiclespeed\" frameborder=\"0\"></iframe>\n\
				</td>			\n\
				<td>\n\
					<iframe width=\"600px\" height=\"500px\" src=\"https://iotdemos.scriptrapps.io/xeebasicdemo/view/enginespeed\" frameborder=\"0\"></iframe>\n\
				</td>\n\
			</tr>	\n\
		</table>\n\
	</body>\n\
</html>';  response.write(content);response.close();			