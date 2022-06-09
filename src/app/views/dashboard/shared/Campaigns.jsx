import React from 'react'
import { Small } from 'app/components/Typography'
import { Box, useTheme } from '@mui/system'
import { SimpleCard, MatxProgressBar } from 'app/components'

const Campaigns = () => {
    const theme = useTheme()
    const secondary = theme.palette.text.secondary

    return (
        <div>
            <SimpleCard title="Campaigns">
                <Small sx={{ color: secondary }}>Today</Small>
                <Box sx={{ pt: 1 }} />
                
                <Box sx={{ py: '4px' }} />
               
                <Box sx={{ py: '4px' }} />
               

                <Box sx={{ py: '12px' }} />
                <Small sx={{ color: secondary }}>Yesterday</Small>
                <Box sx={{ py: 1 }} />
               
                <Box sx={{ py: '4px' }} />
               
                <Box sx={{ py: '4px' }} />
               

                <Box sx={{ py: '12px' }} />
                <Small sx={{ color: secondary }}>Yesterday</Small>
                <Box sx={{ py: '8px' }} />
                
                <Box sx={{ py: '4px' }} />
               
                <Box sx={{ py: '4px' }} />
               
            </SimpleCard>
        </div>
    )
}

export default Campaigns
