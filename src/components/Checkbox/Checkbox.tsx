import 'react';
import { Controller, useFormContext, useFormState } from 'react-hook-form';
import React from 'react';
import * as CheckboxPrim from '@radix-ui/react-checkbox';
import Checked from '../../assets/icons/checkbox-true-ico.svg';
import Unchecked from '../../assets/icons/checkbox-false-ico.svg';
import tw from 'twin.macro';

const Checkbox = ({ name, label }) => {
  const methods = useFormContext();
  const formState = useFormState({ control: methods.control, name: name ? name : '' });
  return (
    <Controller
      control={methods.control}
      name={name ? name : ''}
      render={({ field }) => {
        return (
          <>
            <div
              tw="flex gap-2"
              css={[formState.errors[name ? name : ''] && tw`rounded-md outline outline-offset-0 outline-2 outline-red-400`]}
            >
              <CheckboxPrim.Root
                tw="border-none rounded-md bg-[#fafcfd] p-0 cursor-pointer"
                checked={field.value}
                onCheckedChange={() => field.onChange(!field.value)}
                tabIndex={0}
              >
                {field.value && <img tw="bg-[#E5F4FC] rounded-md" src={Checked} />}
                {!field.value && <img tw="bg-[#E5F4FC] rounded-md" src={Unchecked} />}
              </CheckboxPrim.Root>
              {label && <span>{label}</span>}
            </div>
            {formState.errors[name ? name : ''] && (
              <p tw="m-0 pt-[2px] text-sm text-red-500">{formState.errors[name].message as React.ReactNode}</p>
            )}
          </>
        );
      }}
    />
  );
};

export default Checkbox;
