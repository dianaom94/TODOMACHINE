export const ejecutarCodigo = () =>{
    class Tarea {
        nombre = "";
        prioridad = 1;
        terminado = false;
    
    
        constructor (nombre, prioridad=1, terminado= false){
            this.nombre = nombre;
            this.prioridad = prioridad;
            this.terminado = terminado;
        };
    
        editarNombre(nombre){
            this.nombre = nombre;
            
        };
        editarPrioridad(prioridad=1){
            if(prioridad>=1 && prioridad<=5){
                this.prioridad = prioridad;
            }
        };
    
        finalizar(){
            this.terminado = true;
        }
    
        
    
    }
    
    let listaTareas = [
        new Tarea("Tarea 1", 5),
        new Tarea("Tarea 2", 3),
        new Tarea("Tarea 3", 4),
        new Tarea("Tarea 4")
    ];
    
    function eliminarTarea(key){
        if(listaTareas[key].terminado === false){
            return false;
        } else {
            listaTareas.splice(key, 1)
            return true;
        }
    }
    
    
    
    function filtrarTarea(texto){
        let lista = listaTareas.filter(tarea=>tarea.nombre.indexOf(texto)>-1)
        
        return ordenarTareas(lista)
    
    }
    
    function buscarTarea(texto){
        let tarea = listaTareas.find(tarea=>tarea.nombre == texto)
        return tarea
        
    }
    
    function ordenarTareas (lista){
        let listaOrdenada = lista.sort((t1, t2)=>(t1.prioridad < t2.prioridad)? 1 : (t1.prioridad > t2.prioridad)? -1 : 0 )
        return listaOrdenada
    }
    
    listaTareas[1].editarNombre("tarea2")
    listaTareas[0].editarPrioridad(1)
    listaTareas[0].finalizar()
    
    
    console.log(eliminarTarea(0) ? "Borrado" : "Error") 
    console.log(eliminarTarea(2) ? "Borrado" : "Error") 
    
    
    console.log("filtrar") 
    console.log(filtrarTarea("Ta")) 
    
    console.log("buscar") 
    console.log(buscarTarea("tarea2")) 
    
    
    
    console.log("Tareas")
    console.log((listaTareas))
    
    console.log(("Tareas Ordenadas"))
    console.log(ordenarTareas(listaTareas))
    
    }
    