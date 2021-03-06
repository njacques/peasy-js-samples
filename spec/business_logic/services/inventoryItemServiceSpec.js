describe("InventoryItemService", function() {
  var InventoryItemService = require('../../../business_logic/services/inventoryItemService');
  var dataProxy, inventoryItem;

  describe("insertCommand", () => {

    beforeEach(() => {
      dataProxy = {
        insert: function(data, done) {
          data.id = 1;
          done(null, data);
        },
        update: function(data, done) {
          done(null, {});
        }
      };
    });

    describe("initialization", () => {
      beforeEach(() => {
        inventoryItem = {
          foo: "hello",
          quantityOnHand: 3,
          isAdmin: true,
          productId: 2
        };
      });
      it("allows only whitelisted object members and assigns a version number", () => {
        spyOn(dataProxy, "insert").and.callThrough();
        var expectedResult = {
          id: 1,
          version: 1,
          quantityOnHand: 3,
          productId: 2
        };
        var service = new InventoryItemService(dataProxy);
        service.insertCommand(inventoryItem).execute((err, result) => {
          expect(dataProxy.insert).toHaveBeenCalledWith(expectedResult, jasmine.any(Function));
        });
      });
    });

    describe("rule execution", () => {
      describe("if all valid", () => {

        it ('invalidates all', () => {
          var service = new InventoryItemService(dataProxy);
          service.insertCommand({}).execute((err, result) => {
            expect(result.errors.length).toEqual(1);
          });
        });

        it ('invalidates all with invalid type', () => {
          inventoryItem = {
            quantityOnHand: '3',
            productId: 2
          };
          var service = new InventoryItemService(dataProxy);
          service.insertCommand(inventoryItem).execute((err, result) => {
            expect(result.errors.length).toEqual(1);
          });
        });
      });
    });
  });

  describe("updateCommand", () => {

    beforeEach(() => {
      dataProxy = {
        getById: function(id, done) {
          done(null, {});
        },
        update: function(data, done) {
          done(null, {});
        }
      };
    });

    describe("initialization", () => {

      beforeEach(() => {
        inventoryItem = {
          id: 1,
          foo: "hello",
          quantityOnHand: 3,
          isAdmin: true,
          productId: 2,
          version: 1
        };
      });

      it("allows only whitelisted object members and assigns a version number", () => {
        spyOn(dataProxy, "update").and.callThrough();
        var expectedResult = {
          id: 1,
          version: 1,
          quantityOnHand: 3
        };
        var service = new InventoryItemService(dataProxy);
        service.updateCommand(inventoryItem).execute((err, result) => {
          expect(dataProxy.update).toHaveBeenCalledWith(expectedResult, jasmine.any(Function));
        });
      });
    });

    describe("rule execution", () => {
      describe("if all valid", () => {

        it ('invalidates all', () => {
          var service = new InventoryItemService(dataProxy);
          service.updateCommand({ quantityOnHand: '223'}).execute((err, result) => {
            expect(result.errors.length).toEqual(2);
          });
        });

        it ('invalidates invalid typed version number', () => {
          inventoryItem = {
            quantityOnHand: 3,
            productId: 2,
            version: "1"
          };
          var service = new InventoryItemService(dataProxy);
          service.updateCommand(inventoryItem).execute((err, result) => {
            expect(result.errors.length).toEqual(1);
          });
        });
      });
    });
  });

  describe("getProductCommand", () => {
    describe("validation success", () => {
      it("invokes the appropriate data proxy method", () => {
        var dataProxy = {
          getByProduct: function() {}
        };
        spyOn(dataProxy, 'getByProduct').and.callThrough();
        var service = new InventoryItemService(dataProxy);
        service.getByProductCommand(1).execute((err, result) => {
          expect(dataProxy.getByProduct).toHaveBeenCalled();
        });
      });
    });
  });

});
