/*
Gestion de pedidos
Un pedido estará compuesto de:
- Una fecha de pedido
- Un número total de artículos
- Un total de pedido
- Una dirección de entrega
- Una dirección de facturación
*/

function Pedido(fechaPedido,
 								totalArticulos,
  							totalPedido,
   							direccionEntrega,
    						direccionFacturacion){
	this.fechaPedido = fechaPedido;
	this.totalArticulos=totalArticulos;
	this.totalPedido=totalPedido;
	this.direccionEntrega=direccionEntrega;
	this.direcciónFacturacion=direccionFacturacion;

	//Metodo para conocer la fecha de pedido
	this.getFechaPedido=function(){
		return this.fechaPedido;
	};
	//Metodo para conocer la cantidad de articulos
	this.getTotalArticulos=function(){
		return this.totalArticulos;
	};
	//Metodo para conocer la total de pedido
	this.getTotalPedido=function(){
		return this.totalPedido;
	};
	//Metodo para conocer la direccion de entrega
	this.getDireccionEntrega=function(){
		return this.direccionEntrega;
	};
	//Metodo para conocer la fecha de pedido
	this.getDireccionFacturacion=function(){
		return this.direccionFacturacion;
	};
		//Metodo para cmbiar la direccion de entrega
		this.setDireccionEntrega=function(direccionEntrega){
			this.direccionEntrega=direccionEntrega;
		};
		//Metodo para cmbiar la direccion de facturacion
		this.setDireccionFacturacion=function(direccionFacturacion){
			this.direccionFacturacion=direccionFacturacion;
		};
}