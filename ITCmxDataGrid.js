/* Funciones para DevExtreme DataGrid
** Última modificacion: 24 de julio de 2023 (2023/07/24)
** 
*/

var dataGrid;
var selectedRowIndex = -1;
var key = 0;

$(function () {
  dataGrid = $("#grid").dxDataGrid("instance");

  $(window).resize(function () { ResizeGrid('#grid') });

  DevExpress.config({
    floatingActionButtonConfig: directions["down"]
  });

  ResizeGrid('#grid');
});

function ResizeGrid(AModule) {
  $(AModule).css("height", $(window).innerHeight() - 190);  
  DevExpress.ui.repaintFloatingActionButton();
}

function ResizeGridPercent(AModule, Porcentaje) {
  $(AModule).css("height", $(window).innerHeight() * Porcentaje - 190);  
  DevExpress.ui.repaintFloatingActionButton();
}

function selectionChanged(e) {
  selectedRowIndex = e.component.getRowIndexByKey(e.selectedRowKeys[0]);
  key = e.selectedRowKeys[0];
  
  if ($("#action-remove").length)
    $("#action-remove").dxSpeedDialAction("instance").option("visible", selectedRowIndex !== -1);
  if ($("#action-edit").length)
    $("#action-edit").dxSpeedDialAction("instance").option("visible", selectedRowIndex !== -1);
}

function jsKeyDown(e) {
  if (e.event.keyCode == 27)
    dataGrid.clearSelection();
}

function jsRowDblClick(e) {
  editRow(e);
}

function addRow(e) {
  dataGrid.addRow();
  dataGrid.deselectAll();
}

function deleteRow(e) {
  dataGrid.deleteRow(selectedRowIndex);
  dataGrid.deselectAll();
}

function editRow(e) {
  e.component.editRow(e.rowIndex);
  e.component.deselectAll();
  //dataGrid.editRow(selectedRowIndex);
  //dataGrid.deselectAll();
}

function exporting(e) {
  var workbook = new ExcelJS.Workbook();
  var worksheet = workbook.addWorksheet('Hoja1');

  DevExpress.excelExporter.exportDataGrid({
    component: e.component,
    worksheet: worksheet,
    autoFilterEnabled: true
  }).then(function () {
    workbook.xlsx.writeBuffer().then(function (buffer) {
      saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'Libro de Excel.xlsx');
    });
  });
  e.cancel = true;  
}

function exportingPrompt(e) {
  var sLibro = window.prompt("Escrba el nombre del Libro a exportar", "Libro de Excel");

  if (sLibro != null && sLibro != "") {
    sLibro += '.xlsx'

    var workbook = new ExcelJS.Workbook();
    var worksheet = workbook.addWorksheet('Hoja1');

    DevExpress.excelExporter.exportDataGrid({
      component: e.component,
      worksheet: worksheet,
      autoFilterEnabled: true
    }).then(function () {
      workbook.xlsx.writeBuffer().then(function (buffer) {
        saveAs(new Blob([buffer], { type: 'application/octet-stream' }), sLibro);
      });
    });
  }
  e.cancel = true;
}

function dataGridRefresh(e) {
  dataGrid.refresh();
}

function jsQuitarFiltros(e){  
  dataGrid.clearFilter();
}

function jsGridResetLayout(){
  dataGrid.state(null);
}