package duelo_web_xtend

import org.uqbar.xtrest.api.annotation.Controller
import org.uqbar.xtrest.json.JSONUtils
import org.uqbar.xtrest.api.XTRest
import org.uqbar.xtrest.api.annotation.Get
import org.uqbar.xtrest.api.Result
import org.uqbar.xtrest.http.ContentType

@Controller
class DatosController {
	
	extension JSONUtils = new JSONUtils
	
	def static void main(String[] args){
		XTRest.start(DatosController,9000)
	}
	
	@Get('/datos')
	def Result datos(){
		val datos = #["Algun dato","Otro dato mas","Un tercer dato"]
		response.contentType = ContentType.APPLICATION_JSON
		try {
			ok(datos.toJson)
		}
		catch (Exception e) {
			badRequest('''{"msg":"No pude enviarte los datos como esperaba"}''');
		}
		
	}
	
	
}