import Controller from '@ember/controller';

export default Controller.extend({
  data: [
    { id: '012031020341', name: 'Meter #1' },
    { id: '684565456343', name: 'Meter #2' },
    { id: '684535464865' },
    { id: '053541465354', name: 'Meter #4' },
    { id: '546546846547', name: 'Meter #5' },
  ],

  displayData: [],

  actions: {
    showMeters() {
      this.set('displayData', []);
      this.get('data').forEach((i) => {
        this.get('displayData').pushObject(i.name);
      });
    },

    engageDebugging() {

    }
  },
});
