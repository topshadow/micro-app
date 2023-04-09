import { DatasourceObject } from '../datasource';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
export default {
  title: 'Example/datasource',
  component: DatasourceObject,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Basic = {
  args: {
    table: 'users',
    fields: ['id'],

  },
};

export const Compilex = {
  args: {
    table: 'users',
    fields: ['id', 'tenant.id', 'tenant.name', 'tenant.createAt'],


  },
};

export const PrismaComplexQuery = {
  args: {
    table: 'users',
    fields: ['id'],


  },

};

export const Small = {
  args: {
    table: 'users',
    fields: ['id'],

  },
};
