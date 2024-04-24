import 'react';
import { ConfigProvider, Space } from 'antd';
import styled, { createGlobalStyle, css } from 'styled-components';
import tw from 'twin.macro';
import AntdSelect from 'antd/lib/select';
import { SelectComponentType } from '../common/types';

const SelectComponent = ({ onChange, placeholder, values, loading }: SelectComponentType) => {
  return (
    <Space wrap>
      <GlobalStyle />
      <ConfigProvider>
        <StyledAntdSelect placeholder={placeholder} style={{ width: 120 }} onChange={onChange}>
          {loading ? (
            <Option key={'option'}>loading</Option>
          ) : (
            values.map(item => {
              return (
                <Option key={item.value} value={item.value} label={item.label}>
                  <span tw="leading-[inherit]">{item.label}</span>
                </Option>
              );
            })
          )}
        </StyledAntdSelect>
      </ConfigProvider>
    </Space>
  );
};
const StyledAntdSelect = styled(AntdSelect)(({ $success, disabled }: { $success: boolean; disabled: boolean }) => {
  return [
    css`
      &&& {
        ${tw` w-full h-10 text-sky-300 text-sm border-2! border-transparent! box-border! rounded-[.875rem]!`}
        ${tw``}
        ${$success && [tw`outline outline-2 outline-slate-500 focus:(outline-slate-500!)`]}
        ${disabled && tw`bg-[#262626] cursor-auto`}
      }

      &&&.ant-select-focused {
        ${$success
          ? `box-shadow: 0px 0px 0px 4px rgba(18, 199, 134, 0.5)`
          : tw`bg-[#171717] border-2 border-[#262626] outline outline-offset-1 outline-2 outline-sky-700`}
      }
    `,
    selectRestyle,
  ];
});
// ${size === 'small' && tw`h-8!`}
// ${size === 'medium' && tw`h-10!`}
// ${size === 'large' && tw`h-12!`}
export const selectRestyle = css`
  ant-select-selector {
    ${tw`bg-transparent `}
  }

  &&&.ant-select-sm .ant-select-selection-search-input {
    ${tw`text-black`}
  }

  &&&:not(.ant-select-sm):not(.ant-select-lg) .ant-select-selection-search-input {
    ${tw`text-base text-black`}
  }

  &&&.ant-select-lg .ant-select-selection-search-input {
    ${tw`text-base text-black`}
  }

  &&&.ant-select-sm .ant-select-arrow {
    ${tw`pt-[.125rem]`}
  }

  &&&:not(.ant-select-sm):not(.ant-select-lg) .ant-select-arrow {
    ${tw`pt-[.125rem]`}
  }

  &&&.ant-select-lg .ant-select-arrow {
    ${tw`pt-[.125rem]`}
  }

  .ant-select-sm.ant-select.ant-select-open {
    ${tw`h-8`}
  }

  .ant-select-selection-search-input {
    ${tw`h-full!`}
  }

  .ant-select-selector {
    ${tw`h-10! bg-gray-100! border-none! rounded!`}
  }

  &&&.ant-select-sm .ant-select-selection-placeholder {
    ${tw`leading-[1.625rem] text-[#9ca3af]`}
  }

  &&&:not(.ant-select-sm):not(.ant-select-lg) .ant-select-selection-placeholder {
    ${tw`leading-[2.2rem] text-base text-[#9ca3af]`}
  }

  &&&.ant-select-lg .ant-select-selection-placeholder {
    ${tw`leading-[2.7rem] text-base text-[#9ca3af]`}
  }

  &&&.ant-select-sm .ant-select-selection-item {
    ${tw`leading-[1.7rem]`}
  }

  &&&:not(.ant-select-sm):not(.ant-select-lg) .ant-select-selection-item {
    ${tw`leading-[2.2rem] hover:(bg-none)`}
  }

  &&&.ant-select-lg .ant-select-selection-item {
    ${tw`leading-[2.7rem]`}
  }
`;
export const GlobalStyle = createGlobalStyle`
.ant-select-dropdown {
  border-radius: .875rem;
  box-shadow: 0rem .0625rem .25rem rgba(54, 47, 47, 0.2);
}
.ant-space-item {
  ${tw` hover:(bg-sky-400)!`}
}
//div:has(.ant-select-dropdown ) < {
//  display: none !important;
//}

.ant-select-dropdown .rc-virtual-list-scrollbar {
  ${tw`mr-1`}
}
.rc-virtual-list-scrollbar-thumb {
  ${tw`bg-sky-400!`}
}
.ant-select-dropdown .ant-select-item {
  padding: .75rem .75rem .75rem .4375rem !important;
  min-height: unset !important;
}
.ant-select-dropdown .ant-select-item-option-content {
  ${tw`p-0`}
}
.ant-select-item-option-selected {
  ${tw`bg-orange-300! bg-opacity-10`}
}
`;
export default SelectComponent;
